resource "aws_iam_role" "role" {
  name = "test-role"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "ec2.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

data "aws_iam_policy_document" "apigateway_config" {
  statement {
    sid       = "AllowCreatingLogGroups"
    effect    = "Allow"
    resources = ["arn:aws:logs:*:*:*"]
    actions   = ["logs:CreateLogGroup"]
  }

  statement {
    sid       = "AllowWritingLogs"
    effect    = "Allow"
    resources = ["arn:aws:logs:*:*:log-group:/aws/lambda/*:*"]

    actions = [
      "logs:CreateLogStream",
      "logs:PutLogEvents",
    ]
  }
}

resource "aws_iam_policy" "apigateway_config_cloudwatch" { // Cria a policy para determinada função
  name   = "apigateway-config-cloudwatch"
  policy = data.aws_iam_policy_document.apigateway_config.json
}

resource "aws_iam_role_policy_attachment" "api_cloudwatch" { // Adiciona a police no IDM
  policy_arn = aws_iam_policy.apigateway_config_cloudwatch.arn
  role       = aws_iam_role.role.name // nomr do iam
}
