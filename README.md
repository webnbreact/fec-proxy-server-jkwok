# Project Name: webnb

> Project description: Airbnb front-end clone

## Related Projects

  - https://github.com/webnbreact/checkout
  - https://github.com/webnbreact/product_description
  - https://github.com/webnbreact/reviews_module
  - https://github.com/webnbreact/carousel

## Usage Instructions
1)
2)
3)
4)
5)

## Docker Commands
docker build -t mysql5.7 .
docker build -t nodeserver6 .
docker run --name db_checkout -e MYSQL_ALLOW_EMPTY_PASSWORD=yes -d mysql5.7
docker run -d -p 80:3100 --name server_checkout johnsonkwok/nodeserver6:6.16