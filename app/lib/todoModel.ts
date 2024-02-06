import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
    {
        todo: {
            type: String,
            required: true,
        },
        completed: {
            type: Boolean,
            required: true
        },
    },
    { timestamps: true }
)

export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
