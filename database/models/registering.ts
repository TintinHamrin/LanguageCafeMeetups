import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  mail: {
    type: "string",
    required: true,
  },
  phone: {
    type: "number",
    required: false,
  },
  meetingId: {
    type: "string",
    required: true,
  },
});

const Register =
  mongoose.models.Register || mongoose.model("Register", registerSchema);

export default Register;
