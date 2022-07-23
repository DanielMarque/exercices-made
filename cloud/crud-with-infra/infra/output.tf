output "api_rest_url" {
  value = aws_api_gateway_stage.crud_rest_api.invoke_url
}
