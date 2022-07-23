resource "aws_iam_role" "create_user_crud" {
  name = "create_user_crud"

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

data "archive_file" "create_user_crud" {
  type        = "zip"
  source_dir  = "../src/functions/user/create"
  output_path = "files/create-user.zip"
}

resource "aws_lambda_function" "create_user_crud" {
  function_name    = "create-user-crud"
  description      = "Create a user in dynamo"
  s3_bucket        = aws_s3_bucket.lambda_package.bucket
  s3_key           = aws_s3_bucket_object.file_upload.key
  role             = aws_iam_role.create_user_crud.arn
  handler          = "index.handler"
  source_code_hash = data.archive_file.create_user_crud.output_base64sha256 // Pegar mudanças realizadas
  runtime          = "nodejs14.x"
}

resource "aws_lambda_permission" "allow_cloudwatch" { // Permissão de escrita de logs
  statement_id  = "AWSLambdaBasicExecutionRole"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.create_user_crud.function_name
  principal     = "events.amazonaws.com"
  source_arn    = "arn:aws:events:${var.aws_region}:${var.aws_account_id}:*/*"
}

resource "aws_lambda_permission" "apigateway" { // Permissão pra invocar rota
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.create_user_crud.arn
  principal     = "apigateway.amazonaws.com"
  source_arn    = "arn:aws:execute-api:${var.aws_region}:${var.aws_account_id}:${aws_api_gateway_rest_api.crud.id}/*/${aws_api_gateway_method.post_crud.http_method}${aws_api_gateway_resource.path_crud.path}"
}
