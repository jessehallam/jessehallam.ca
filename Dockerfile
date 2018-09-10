FROM    node:8.11-alpine
WORKDIR /app

COPY    . .
RUN     npm install
RUN     npm run-script build

EXPOSE  80

CMD     [ "npm", "start" ]