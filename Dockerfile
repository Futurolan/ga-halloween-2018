FROM node:alpine

EXPOSE 3000

ARG EDITION_ID=1
ARG BACKEND_API_URL=https://backoffice.gamers-assembly.net

WORKDIR /usr/src/ga-client
COPY . .
RUN npm install
RUN npm run-script build


CMD npm start