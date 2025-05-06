import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  isGoogleUser: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: function () {
      return !this.isGoogleUser;
    },
    minlength: 6,
  },
  profilePic: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    length: 11,
  },
  city: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive", "warned", "disabled", "banned"],
    default: "active",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
});

const Customer = mongoose.model("Customer", customerSchema);
export default Customer;
