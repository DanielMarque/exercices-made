resource "aws_apigatewayv2_api" "create_user_crud" {
  name          = "create-user-crud"
  protocol_type = "HTTP"
}

resource "aws_apigatewayv2_stage" "create_user_crud" { //Sem entendimento
  api_id      = aws_apigatewayv2_api.create_user_crud.id
  name        = "$default"
  auto_deploy = true
}

resource "aws_apigatewayv2_integration" "create_user_crud" {
  api_id             = aws_apigatewayv2_api.create_user_crud.id
  integration_type   = "AWS_PROXY" // This way we can referrer the integration_uri internally without type the full url
  description        = "Integração com a lambda de create-user"
  integration_method = "POST"
  integration_uri    = aws_lambda_function.create_user_crud.invoke_arn
}

resource "aws_apigatewayv2_route" "create_user_crud" {
  api_id    = aws_apigatewayv2_api.create_user_crud.id
  route_key = "POST /"
  target    = "integrations/${aws_apigatewayv2_integration.create_user_crud.id}"
}
