resource "aws_s3_bucket" "lambda_package" {
  bucket = "create-user-me"

  tags = {
    Name = "bucket for lambdas"
  }
}

resource "aws_s3_bucket_object" "file_upload" {
  bucket = aws_s3_bucket.lambda_package.id
  key    = "files/create-user.zip"
  source = data.archive_file.create_user.output_path
}
