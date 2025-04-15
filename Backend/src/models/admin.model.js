import mongoose from "mongoose";
const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 12,
  },
  role: {
    type: String,
    enum: ["admin", "SuperAdmin"],
    default: "admin",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
