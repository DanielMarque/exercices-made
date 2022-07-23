output "api_url" {
  value = aws_apigatewayv2_stage.create_user_crud.invoke_url
}
