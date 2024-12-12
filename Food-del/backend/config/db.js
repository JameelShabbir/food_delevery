import mongoose from "mongoose"

export const connectDb = async () => {
    // await mongoose.connect("mongodb+srv://admin:admin@cluster0.hzmsw.mongodb.net/food_del").then(() => console.log("Database connected successfully!"));
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`database connected successfully ${conn.connection.host}`);
    } catch (error) {
        console.log("mongodb connection error" + error);
    }
}