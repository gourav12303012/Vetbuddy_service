import mongoose from "mongoose";

const feedbackschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    serviceType:{
        type:String,
        required:true
    },
    feedback:{
        type:String,
        required:true
    }
})

export const userfeedback = mongoose.model("userfeedback", feedbackschema)
