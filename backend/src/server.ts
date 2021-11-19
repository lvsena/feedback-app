import express, { Application, Router } from "express";
import bodyParser from "body-parser";
import { Database } from "./infra/database/Database";
import HelloWorldRouter from "./api/helloworld.routes";

class Server {
  private app;

  constructor() {
    this.app = express();
    this.config();
    this.routerConfig();
    this.dbConnect();
  }

  private config(): void {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json({ limit: "1mb" }));
  }

  private dbConnect(): void {
    const database = new Database();
    database.connect();
  }

  private routerConfig(): void {
    this.app.use("/helloworld", HelloWorldRouter);
  }

  public start = (port: number) => {
    return new Promise((resolve, reject) => {
      this.app
        .listen(port, () => {
          resolve(port);
        })
        .on("error", (err: Object) => reject(err));
    });
  };
}

export default Server;
