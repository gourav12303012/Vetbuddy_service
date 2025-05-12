import mongoose from "mongoose"

const adoptPet = mongoose.Schema({
    fullname:{
        type:String,required:true
    },
    email:{
        type:String, required:true , unique:true
    },
    phone:{
        type:Number , required:true 
    },
    address:{
        type:String, required:true
    },
    reason:{
        type:String , required:true
    }
})

export const pet = mongoose.model("pet" , adoptPet )