provider "aws" {
  region = var.aws_region

    default_tags {
    tags = {
      Project   = "Serverless REST API"
      ManagedBy = "Terraform"
      Owner     = "Daniel Marques"
      Env       = var.env
    }
  }
}
