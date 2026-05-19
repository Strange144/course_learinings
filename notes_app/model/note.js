import mongoose from "mongoose";
const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 100
    },
    content: {
        type: String,
        required: true,
        maxLength: 2000
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})
NoteSchema.pre("save", function () {
    this.updatedAt = Date.now()
})

if (process.env.NODE_ENV === "development") {
    delete mongoose.models.note;
}

export default mongoose.models.note || mongoose.model("note", NoteSchema)