resource "aws_cloudwatch_log_group" "crud" {
  name              = "/aws/lambda/crud"
  retention_in_days = 3
}
