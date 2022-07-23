data "aws_iam_policy_document" "create_logs_cloudwatch" { // Escreve police em formato json
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

resource "aws_iam_policy" "create_logs_cloudwatch" { // Cria a policy para determinada função
  name   = "create-user-policy"
  policy = data.aws_iam_policy_document.create_logs_cloudwatch.json
}

resource "aws_iam_role_policy_attachment" "api_cloudwatch" { // Adiciona a police no IDM
  policy_arn = aws_iam_policy.create_logs_cloudwatch.arn
  role       = aws_iam_role.create_user_crud.name // nomr do iam
}
