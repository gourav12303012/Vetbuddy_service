import { userfeedback } from "../model/form.model.js";

export const feedbackData = async(req,res)=>{
    try {
        const {name, email, rating, serviceType, feedback} = req.body;

    const newFeedback = await userfeedback.create({name,email,rating,serviceType,feedback
        
    })
        return res.status(200).json({
            message : "Feedback Successfully Submitted",
            data : newFeedback
        })
    } catch (error) {
        console.log("somthing error server side",error)
    }
}
