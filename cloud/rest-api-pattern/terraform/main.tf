provider "aws" {
  region  = var.aws_region

  default_tags {
    tags = {
      Project   = "Serverless REST API Tutorial"
      CreatedAt = "2021-09-05"
      ManagedBy = "Terraform"
      Owner     = "Daniel Marques"
      Env       = var.env
    }
  }
}
