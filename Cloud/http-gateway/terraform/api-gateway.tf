resource "aws_apigatewayv2_api" "create_user" {
  name          = "create-user-http-api"
  protocol_type = "HTTP"
}

resource "aws_apigatewayv2_stage" "create_user" { //Sem entendimento
  api_id      = aws_apigatewayv2_api.create_user.id
  name        = "$default"
  auto_deploy = true
}

resource "aws_apigatewayv2_integration" "create_user" {
  api_id             = aws_apigatewayv2_api.create_user.id
  integration_type   = "AWS_PROXY" // This way we can referrer the integration_uri internally without type the full url
  description        = "Integração com a lambda de create-user"
  integration_method = "POST"
  integration_uri    = aws_lambda_function.create_user.invoke_arn
}

resource "aws_apigatewayv2_route" "create_user" {
  api_id    = aws_apigatewayv2_api.create_user.id
  route_key = "GET /"
  target    = "integrations/${aws_apigatewayv2_integration.create_user.id}"
}
