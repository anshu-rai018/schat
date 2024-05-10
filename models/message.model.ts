import mongoose, { PopulatedDoc } from "mongoose";
import { UserDocument } from "./user.model";

export interface MessageInterface{
    senderId: Type.ObjectId | PopulatedDoc <UserDocument>
    receiverId: Type.ObjectId | PopulatedDoc <UserDocument>
}

const messageModel = new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    content:{
        type:String,
        required:true
    },
    messageType:{
        type:String,
        required:true,
        enum:['text','image']
    },
    opened:{
        type:Boolean,
        default:false
    }
},{timestamps:true});