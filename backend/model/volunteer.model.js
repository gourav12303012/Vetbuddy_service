import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true
    },
    interest: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);
export default Volunteer;
