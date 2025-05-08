import { form } from "../model/form.model.js"

export const formData = async(req,res)=>{
    try {
        const {name,email,interest, message}= req.body;

        const newForm = await form.create({name,email,interest,message})
        return res.status(200).json({
            message : "created success",
            data : newForm
        })
        
    } catch (error) {
        console.log("somthing error server side",error)
    }
}