import mongoose from "mongoose";

export const connectToMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/NoteMate')
        console.log("Connect to MongoDB");

    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);

    }
}