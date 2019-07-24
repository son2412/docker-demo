run command:
- docker build --rm -f Dockerfile -t docker-node:latest .
- docker run --rm -d -p 3000:3000 docker-node:latest<br>
or:
- docker-compose up -d --build
