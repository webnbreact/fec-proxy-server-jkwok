# Project Name: webnb

> Project description: Airbnb front-end clone with much less features

## Related Projects

  - https://github.com/webnbreact/checkout
  - https://github.com/webnbreact/product_description
  - https://github.com/webnbreact/reviews_module
  - https://github.com/webnbreact/carousel

## Usage Instructions
1) Run "npm install" to install dependencies.
2) Install Nodemon globally if it hasn't already been installed. ("npm install nodemon -g")
3) Run "npm run seed-db" (Note: You may have to change the seed-db script and add "-p" if your mysql root user has a password. This may also require adding the line "password: [yourPassword]" to line 6 of 'db/seedDb.js'.)
4) Run "npm start".
5) In a browser navigate to http://localhost:1337

## Docker Commands
docker build -t mysql5.7 .
docker build -t nodeserver6 .
docker run --name db_checkout -e MYSQL_ALLOW_EMPTY_PASSWORD=yes -d mysql5.7
docker run -d -p 80:1337 --name server_checkout johnsonkwok/nodeserver6:6.16
