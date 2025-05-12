import { pet } from "../model/adoptPet.model.js"

export const adoptPetData =  async(req , res)=>{
    try {
           const {fullname,email,phone,address,reason} = req.body

           if( !fullname || !email ||!phone||!address||!reason)
           {
            return res.status(400).json({message:"required fields are mandatory" , success:false})
           }

           const petData = await pet.create({fullname,email,phone,address,reason})
           return res.status(200).json({
            message:"Pet adopt successfully",
            success:true,
            data:petData
           })
        

    } catch (error) {
         console.error(error)
    }
}