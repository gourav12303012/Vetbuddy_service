import { Appointment } from "../model/Appointment.model.js";
import { User } from "../model/user.model.js";

export const bookappointment = async (req, res) => {
  try {
    const { id } = req.params;
    const { animalName, dateTime, address, DoctorName, reason,status } = req.body;

    // Validate required fields
    if (!animalName || !dateTime || !address || !DoctorName || !reason) {
      return res.status(403).json({
        message: "Required fields are missing",
        success: false,
      });
    }

    // Validate dateTime format and if it's a valid future date
    const appointmentDate = new Date(dateTime);
    if (isNaN(appointmentDate.getTime()) || appointmentDate < new Date()) {
      return res.status(400).json({
        message: "Invalid date or date is in the past",
        success: false,
      });
    }

    // Check if the user exists
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    // Check if the time slot is already booked
    const existingAppointment = await Appointment.findOne({ dateTime });
    if (existingAppointment) {
      return res.status(409).json({
        message: "This time slot is already booked",
        success: false,
      });
    }

    // Create the new appointment
    const newAppointment = await Appointment.create({
      animalName,
      dateTime,
      address,
      DoctorName,
      reason,
      status,
      userId: id,
    });

    return res.status(200).json({
      message: "Appointment booked successfully",
      success: true,
      appointment: newAppointment,
    });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
export const userAllAppointment = async (req, res) => {
  try {
   const appointments = await Appointment.find().populate("DoctorName", "name");

    return res.status(200).json({
      message: "successfull appointment fetch",
      success: true,
      list: appointments,
    });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
