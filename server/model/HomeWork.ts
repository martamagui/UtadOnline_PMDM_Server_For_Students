import { model, Schema, Document } from "mongoose";

export interface HomeWork extends Document {
    title: string;
    subject: string;
    teacher_name: string;
    date: string;
    description: string;
    necessary_materials: [string]
}

const homeWorktSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    teacher_name: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    necessary_materials: {
        type: [String],
        required: false
    }
});

export default model<HomeWork>("homeWork", homeWorktSchema);