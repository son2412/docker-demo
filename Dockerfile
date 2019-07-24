FROM node:carbon

WORKDIR /usr/src/app

COPY . .

RUN npm config set package-lock false

RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]