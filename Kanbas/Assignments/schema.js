import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema({
        title: String,
        course: String,
        points: Number,
        description: String,
        due: Date,
        available: Date,
        until: Date,
    },
    {collection: "assignments"}
);
export default assignmentSchema;