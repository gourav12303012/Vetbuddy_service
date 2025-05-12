import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const connectDB = async () => mongoose.connect(process.env.MONGODB_URI).then(()=>{

  console.log("DataBse Connected successfull")
}).catch((err)=>{
  console.log("something error ",err)
});

export default connectDB;