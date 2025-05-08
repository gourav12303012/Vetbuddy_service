import express from "express";
import { getAllUser, getUser, login, register } from "../controller/user.controller.js";
import { bookappointment, userAllAppointment } from "../controller/appointment.controller.js";

import { formData } from "../controller/form.controller.js";
import { getAllVolunteer, volunteerData } from "../controller/volunteer.controller.js";
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/dashboard/:id").get(getUser);
router.route("/appointment/:id").post(bookappointment);
router.route("/allUser").get(getAllUser)
router.route("/userAllAppointment").get(userAllAppointment);
router.route("/form").post(formData)
router.route("/Volunteer").post(volunteerData)
router.route("/getAllVolunteer").get(getAllVolunteer)

export default router;
