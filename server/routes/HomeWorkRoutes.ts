import { Router, Request, Response } from "express";

//Inner imports
import HomeWork from "../model/HomeWork";
import HomeWorkGetController from "../controlers/home_work/homeWorkGet";
import { userExtractor } from "../middleware/userExtractor";

export class HomeWorkRoutes {
    router: Router;

    constructor() {
        this.router = Router();
        this.gets();
    }

    private gets() {

        this.router.get(
            "/homeWork/:id",
            userExtractor,
            (req: Request, res: Response) => {
                HomeWorkGetController.homeWork(req, res);
            }
        );
        this.router.get(
            "/homeWork/",
            userExtractor,
            (req: Request, res: Response) => {
                HomeWorkGetController.homeWork(req, res);
            }
        );
    }
}
