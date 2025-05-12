import { Donation } from "../model/donation.model.js"

export const donationData = async(req,res)=>{
    try {
        const  {fullname,email,phone,amount,message} = req.body
    
        if(!fullname || !email || !phone || !amount ){
            return res.status(400).json({
                message:"Required fields are missing" , success : false
            })
        }

        const DonationData = await Donation.create({fullname,email,phone,amount,message})

        return res.status(200).json({
            message:"Donation recieved Successfully",
             data : DonationData
        })


    } catch (error) {
        console.error(error)
    }

}