import TaskModel  from "../../model/Task";
import { Request, Response } from "express";

class TaskGetController {
    public async tasksModels(req: Request, res: Response) {
        try {
            const params = req.params.id
            if (params != null) {
                const homeWork = await TaskModel.find();
                if (homeWork) {
                    return res.status(200).json(homeWork);
                }
            } else {
                return res.status(404).json({ message: "Missing school name" });
            }
            return res.status(404).json({ message: "Not found." });
        } catch (error) {
            console.log(error);
            return res.status(404).json({ message: "Not found." });
        }
    }
}

export default new TaskGetController();
