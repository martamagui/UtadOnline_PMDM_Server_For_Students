import { model, Schema, Document } from "mongoose";

export interface TaskModel extends Document {
    task_title: string;
    project: object;
    employee: string;
    dead_line: string;
    description: string;
    details: [string];
}
const ProjectSchema = new Schema({
    title: String,
    department: String,
    project_dead_line: String,
    project_photo: String
});

const taskSchema = new Schema({
    task_title: {
        type: String,
        required: true,
    },
    project: ProjectSchema,
    employee: {
        type: String,
        required: true,
    },
    dead_line: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    details: {
        type: [String],
        required: false
    }
});

export default model<TaskModel>("task", taskSchema);