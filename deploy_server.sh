

#! /bin/bash
yarn build:server
docker build -t ledbetterjoshua/airbnb_clone:latest .
docker push ledbetterjoshua/airbnb_clone:latest
ssh root@167.99.11.233 "docker pull ledbetterjoshua/airbnb_clone:latest && docker tag ledbetterjoshua/airbnb_clone:latest dokku/airbnb_clone:latest && dokku tags:deploy airbnb_clone latest"