import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  // 🏪 Restaurant Details
  name: {
    type: String,
    required: true,
  },
 address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  businessType: {
    type: String,
    enum: ["restaurant", "cloudKitchen", "takeOut"],
    required: true,
  },
  cuisineType: {
    type: String,
    required: true,
  },
  kitchenImage: {
    type: String, // File path or URL
  },

  // 👤 Owner / Manager
  ownerName: {
    type: String,
    required: true,
  },
  ownerContactNumber: {
    type: String,
    required: true,
  },
  ownerContactEmail: {
    type: String,
    required: true,
  },
  governmentID: {
    type: String,
    required: true,
  },
  restaurantCity: {
    type: String,
  },

  // 🏦 Bank Details
  bankName: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: String,
    required: true,
  },
  accountTitle: {
    type: String,
    required: true,
  },
  ibanNumber: {
    type: String,
    required: true,
  },
  paymentCycle: {
    type: String,
    enum: ["weekly", "biweekly", "monthly"],
    required: true,
  },

  // 🔒 Access Info
  password: {
    type: String,
    required: true,
    minlength: 6,
  },

  // 📦 Menu (empty by default, can be filled later)
  menu: {
    type: Array,
    default: [],
  },

  // 🛡️ Status Tracking
  status: {
    type: String,
    enum: ["active", "warned", "banned"],
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

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;
