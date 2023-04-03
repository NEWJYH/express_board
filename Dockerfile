FROM node:14

WORKDIR /myfolder/

COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
RUN yarn install

COPY . /myfolder/

CMD yarn dev
# ENV NODE_ENV production
# COPY start.sh /usr/src/app/start.sh
# RUN chmod +x /myfolder/start.sh
