FROM node:16.13.0
RUN mkdir -p /usr/src/proteinus
WORKDIR /usr/src/proteinus
COPY . .
RUN yarn install
CMD [ "yarn", "dev" ]
EXPOSE 3000
