FROM node:carbon

# ARG ROOT_FOLDER=./

WORKDIR /usr/src/app

# COPY ./package.json ./

#RUN cp .env.example .env

RUN npm config set package-lock false

RUN npm cache clean --force && npm install

COPY . .

EXPOSE 3000
CMD [ "npm", "run", "start" ]