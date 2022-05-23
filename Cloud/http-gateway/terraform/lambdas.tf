resource "aws_iam_role" "create_user" {
  name = "create_user"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

data "archive_file" "create_user" {
  type        = "zip"
  source_dir  = "../lambdas"
  output_path = "files/create-user.zip"
}

resource "aws_lambda_function" "create_user" {
  function_name = "create-user"
  description   = "Should create a user in Dynamo using HTT gtwy"
  s3_bucket     = aws_s3_bucket.lambda_package.bucket
  s3_key        = aws_s3_bucket_object.file_upload.key
  role          = aws_iam_role.create_user.arn
  handler       = "create-user.handler"
  source_code_hash = data.archive_file.create_user.output_base64sha256 // Pegar mudanças realizadas
  runtime = "nodejs14.x"

  environment {
    variables = {
      DYNAMO_TABLE_USERS = "${aws_dynamodb_table.users.name}"
    }
  }
}

resource "aws_lambda_permission" "allow_cloudwatch" { // Permissão de escrita de logs
  statement_id  = "AWSLambdaBasicExecutionRole"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.create_user.function_name
  principal     = "events.amazonaws.com"
  source_arn    = "arn:aws:events:${var.aws_region}:${var.aws_account_id}:*/*"
}

resource "aws_lambda_permission" "lambda_permission" { // Permissão pra invocar rota
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.create_user.arn
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.create_user.execution_arn}/*/*/"
}
