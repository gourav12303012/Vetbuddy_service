import mongoose, { mongo } from "mongoose";

const donation = mongoose.Schema({
    fullname:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    amount:{
        type:String,required:true
    },
    message:{
        type:String
    }
})

export const Donation = mongoose.model("Donation",donation)