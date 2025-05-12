
import express from 'express'
import connectDB from './utils/connectDb.js'
// import feedData from './routes/feedback.route.js'
import userApi from './routes/user.route.js'
import path  from 'path'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const corsOption ={
  origin:["http://localhost:5173"],
  credentials : true
}

app.use(cors(corsOption))

app.get("/",(req,res)=>{
  res.send("this is backend part ")
})
app.use("/user",userApi)
// app.use("/feedback",feedData)

app.use((req,res)=>{
  res.status(404).sendFile(path.join(import.meta.dirname,"views","404.html"))
})


app.listen(5000,()=>{
  connectDB()
  console.log("Server is listen port number 5000")
})