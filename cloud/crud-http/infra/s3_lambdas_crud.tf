resource "aws_s3_bucket" "lambdas_crud" {
  bucket = "create-user-me"

  tags = {
    Name = "bucket for lambdas"
  }
}

resource "aws_s3_bucket_object" "file_upload" {
  bucket = aws_s3_bucket.lambdas_crud.id
  key    = "files/create-user.zip"
  source = data.archive_file.create_user_crud.output_path
}
