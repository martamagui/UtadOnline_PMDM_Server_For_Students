import { Router, Request, Response } from "express";

//Inner imports
import HomeWork from "../model/HomeWork";
import HomeWorkGetController from "../controlers/home_work/homeWorkGet";

export class HomeWorkRoutes {
    router: Router;

    constructor() {
        this.router = Router();
        this.gets();
    }

    private gets() {

        this.router.get(
            "/homeWork/:id",
            (req: Request, res: Response) => {
                HomeWorkGetController.homeWork(req, res);
            }
        );
        this.router.get(
            "/homeWork/",
            (req: Request, res: Response) => {
                HomeWorkGetController.homeWork(req, res);
            }
        );
    }
}
