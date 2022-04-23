output "api_url" {
  value = aws_apigatewayv2_stage.create_user.invoke_url
}
