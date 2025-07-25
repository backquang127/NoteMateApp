import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
    },
    tag: {
       type: String,
    }
}, {
    timestamps: true
});
bookSchema.index({ title: 'text', caption: 'text' });

const Book = mongoose.models.Book || mongoose.model('Book', bookSchema);
export default Book;