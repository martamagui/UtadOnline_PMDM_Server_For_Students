import { Router, Request, Response } from "express";

//Inner imports
import TaskModel from "../model/HomeWork";
import TaskGetController from "../controlers/task/taskModelGet";
import { userExtractor } from "../middleware/userExtractor";

export class TaskModelRoutes {
    router: Router;

    constructor() {
        this.router = Router();
        this.gets();
    }

    private gets() {

        this.router.get(
            "/task/:id",
            userExtractor,
            (req: Request, res: Response) => {
                TaskGetController.tasksModels(req, res);
            }
        );
        this.router.get(
            "/task/",
            userExtractor,
            (req: Request, res: Response) => {
                TaskGetController.tasksModels(req, res);
            }
        );
    }
}
