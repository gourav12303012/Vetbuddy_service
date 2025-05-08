import Volunteer from '../model/volunteer.model.js'

export const volunteerData = async (req, res) => {
    try {
        const { fullname, email, phone, interest } = req.body;

        if (!fullname || !email || !phone || !interest) {
            return res.status(400).json({
                message: "Required fields are missing",
                success: false
            });
        }

        const existingData = await Volunteer.findOne({ email });

        if (existingData) {
            return res.status(409).json({
                message: "Data already exists",
                success: false
            });
        }

        const newVol = await Volunteer.create({ fullname, email, phone, interest });

        return res.status(201).json({
            message: "Successfully created",
            success: true,
            data: newVol
        });

    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            success: false,
            error: error.message
        });
    }
}

export const getAllVolunteer = async(req,res)=>{
try {
    
    const data = await Volunteer.find({})
    return res.status(200).json({
        message :" successfully data is fetched",
        success: true,
        data: data
    })
} catch (error) {
    console.log("error",error)
}
}