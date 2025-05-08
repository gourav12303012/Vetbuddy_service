import mongoose from "mongoose";

const formSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    interest:{
        type:[String]
    },
    message:{
        type:String, required:true 
    }
})

export const  form = mongoose.model("form", formSchema)