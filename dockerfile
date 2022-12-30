FROM node:16.13.0
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN yarn
CMD [ "yarn", "dev" ]
EXPOSE 3000
