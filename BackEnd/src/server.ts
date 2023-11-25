import express, { Express, Request, Response } from 'express';

const PORT: Number = Number(process.env.SERVER_PORT || 3000);

let server: Express = express();

export default {
  start () {
    server.listen(PORT, () => {
      console.log(`Server started on port ${PORT}!`);
    });
  }
};
