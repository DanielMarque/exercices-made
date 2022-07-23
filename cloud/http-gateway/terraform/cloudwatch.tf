resource "aws_cloudwatch_log_group" "create_user" {
  name              = "/aws/lambda/create-user"
  retention_in_days = 3
}
