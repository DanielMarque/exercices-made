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
  output_path = "files/create-user.zip"
  type        = "zip"
  source_file = "../lambdas/create-user.js"
}

resource "aws_lambda_function" "create_user" {
  filename      = "files/create-user.zip"
  description   = "Should create a user in Dynamo using HTT gtwy"
  function_name = "create-user"
  role          = aws_iam_role.create_user.arn
  handler       = "create-user.handler"
  runtime       = "nodejs14.x"
}

resource "aws_lambda_permission" "allow_cloudwatch" {
  statement_id  = "AWSLambdaBasicExecutionRole"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.create_user.function_name
  principal     = "events.amazonaws.com"
  source_arn    = "arn:aws:execute-api:${var.aws_region}:${var.aws_account_id}:*/*"
}

resource "aws_lambda_permission" "api" { // Permissão pra invocar rota
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.create_user.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "arn:aws:execute-api:${var.aws_region}:${var.aws_account_id}:*/*"
}
