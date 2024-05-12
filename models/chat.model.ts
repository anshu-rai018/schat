import mongoose, { Document, Types } from "mongoose";

export interface ChatInterface{
    participants:Types.ObjectId[],
    messages:Types.ObjectId[],
}

export interface ChatDocument extends ChatInterface, Document{
    Types.ObjectId[],
}

const chatModel = new mongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
    }
],
messages:[
    {
        type:mongoose.Schema.ObjectId,
        ref:'Message'
    }
]
},{timestamps:true})