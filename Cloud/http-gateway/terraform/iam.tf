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

  statement {
    sid       = "FullAccessToUserItems"
    effect    = "Allow"
    resources = ["arn:aws:dynamodb:us-east-1::413425779393:table/users/*"]

    actions = [
      "dynamodb:PutItem"
    ]
  }
}

resource "aws_iam_policy" "create_logs_cloudwatch" { // Cria a policy para determinada função
  name   = "create-user-policy"
  policy = data.aws_iam_policy_document.create_logs_cloudwatch.json
}

resource "aws_iam_role_policy_attachment" "cat_api_cloudwatch" { // Adiciona a police no IDM
  policy_arn = aws_iam_policy.create_logs_cloudwatch.arn
  role       = aws_iam_role.create_user.name // nomr do iam
}

data "aws_iam_policy_document" "dynamodb_permissions" { // Escreve police em formato json
  statement {
    actions = [
      "dynamodb:PutItem"
    ]

    effect    = "Allow"
    resources = ["arn:aws:dynamodb:us-east-1:413425779393:table/users"]
  }
}

resource "aws_iam_policy" "dynamodb_permissions" { // Cria a policy para determinada função
  name   = "create-user-policy-dynamodb"
  policy = data.aws_iam_policy_document.dynamodb_permissions.json
}

resource "aws_iam_role_policy_attachment" "dynamodb_permissions" { // Adiciona a police no IDM
  policy_arn = aws_iam_policy.dynamodb_permissions.arn
  role       = aws_iam_role.create_user.name // nomr do iam
}
