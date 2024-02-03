import {Schema } from "mongoose";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true
        },
        todos: [{
            type: Schema.Types.ObjectId,
            ref: "Todo"
        }]
    },
    { timestamps: true }
)

export default mongoose.models.User || mongoose.model("User", UserSchema)
