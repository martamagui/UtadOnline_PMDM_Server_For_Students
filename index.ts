import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";

//Routes
import { HomeWorkRoutes } from "./server/routes/HomeWorkRoutes";
import { TaskModelRoutes } from "./server/routes/TaskModelsRoutes";

//Configuration
import configuration from "./server/configuration/configuration";
import { dbConnection } from "./server/db/dbConnection";
import { swaggerSpec, swaggerUI } from "./server/documentation/swagger";

class Index {
  app: Application;
  private apiV1 = "/api/v1";

  constructor() {
    this.app = express();
    this.generalConfiguration();
    this.startServer();
    this.routes();
  }

  public generalConfiguration() {
    dotenv.config();
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  public startServer() {
    const port = configuration.PORT;
    this.app.set("port", port);
    this.app.listen(port, () => {
      console.log("Server listening on port: ", port);
    });
  }

  public routes() {
    this.app.get("/", (req, res) => {
      res.send("Invaild endpoint");
    });
    this.app.use(this.apiV1, new HomeWorkRoutes().router);
    this.app.use(this.apiV1, new TaskModelRoutes().router);
  }
}

dbConnection.then(() => {
  console.log("Connected with DB.");
  new Index();
});
