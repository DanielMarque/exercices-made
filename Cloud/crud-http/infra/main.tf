provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project   = "Crud as HTTP"
      CreatedAt = "2022-05-23"
      Owner     = "Daniel Marques"
      Env       = var.env
    }
  }
}
