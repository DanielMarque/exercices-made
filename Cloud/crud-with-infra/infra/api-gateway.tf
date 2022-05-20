resource "aws_api_gateway_rest_api" "crud" {
  name = "crud"
}

resource "aws_api_gateway_resource" "path_crud" {
  parent_id   = aws_api_gateway_rest_api.crud.root_resource_id
  path_part   = "crud"
  rest_api_id = aws_api_gateway_rest_api.crud.id
}

resource "aws_api_gateway_method" "post_crud" {
  authorization = "NONE"
  http_method   = "POST"
  resource_id   = aws_api_gateway_resource.path_crud.id
  rest_api_id   = aws_api_gateway_rest_api.crud.id
}

resource "aws_api_gateway_integration" "post_crud_integration" {
  http_method             = aws_api_gateway_method.post_crud.http_method
  resource_id             = aws_api_gateway_resource.path_crud.id
  rest_api_id             = aws_api_gateway_rest_api.crud.id
  integration_http_method = "POST"
  type                    = "HTTP_PROXY"
  uri                     = aws_lambda_function.create_user_crud.invoke_arn
}
