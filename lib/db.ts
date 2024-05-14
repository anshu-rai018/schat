import { log } from "console";
import mongoose, { Connection } from "mongoose";

let isConnected:Connection | boolean = false;

const connectDatabase = async () => {
    if (isConnected) {
        console.log('Mongodb already connected');
        return isConnected;
    }

    try {
        const res = await mongoose.connect("mongodb+srv://anshurai018:anshurai018@schat.qfxfzxy.mongodb.net/");
        isConnected = res.connection;
        console.log('mongodb connected successfully');
        return isConnected;

    } catch (error) {
        console.log(error);
        throw error;
    }
}
export default connectDatabase;