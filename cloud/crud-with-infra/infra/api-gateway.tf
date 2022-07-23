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
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.create_user_crud.invoke_arn
}

// For url - api

resource "aws_api_gateway_deployment" "url_api" {
  rest_api_id = aws_api_gateway_rest_api.crud.id
  triggers = {
    redeployment = sha1(jsonencode(aws_api_gateway_rest_api.crud.body))
  }

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_api_gateway_stage" "crud_rest_api" {
  deployment_id = aws_api_gateway_deployment.url_api.id
  rest_api_id   = aws_api_gateway_rest_api.crud.id
  stage_name    = "sandbox"
}

resource "aws_api_gateway_method_settings" "config_crud" {
  rest_api_id = aws_api_gateway_rest_api.crud.id
  stage_name  = aws_api_gateway_stage.crud_rest_api.stage_name
  method_path = "*/*"

  settings {
    logging_level = "INFO"
  }
}
