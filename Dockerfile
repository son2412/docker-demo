FROM node:carbon

WORKDIR /usr/src/app

COPY . .

#RUN cp .env.example .env

RUN npm config set package-lock false

RUN npm cache clean --force && npm install

EXPOSE 3000
CMD [ "npm", "run", "dev" ]