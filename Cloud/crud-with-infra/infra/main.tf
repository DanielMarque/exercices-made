provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project = "Crud Bunitinho"
      Owner   = "Daniel Marques"
      Env     = var.env
    }
  }
}
