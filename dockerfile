FROM node:16.13.0
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN yarn install
CMD [ "yarn", "dev" ]
EXPOSE 3000
