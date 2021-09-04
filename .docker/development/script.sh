#!/bin/sh

if [ $(uname) = 'Linux' ]; then
  echo 'docker-compose -f ./.docker/development/docker-compose.yaml'
else
  echo 'docker-compose -f ./.docker/development/docker-compose.yaml'
fi