============ Docker ===========
run command: 
    - docker build --rm -f Dockerfile -t docker-node:latest .
    - docker run --rm -d -p 3000:3000 docker-node:latest
or:
    docker-compose up -d --build
