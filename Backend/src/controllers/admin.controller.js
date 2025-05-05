import { generateToken } from "../lib/utils.js";
import Admin from "../models/admin.model.js";
import Customer from "../models/customer.model.js";
import Restaurant from "../models/restaurant.model.js";
import Complaint from "../models/complaint.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { name, email, password, adminRole } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Required Fields are Missing" });
    }
    if (password.length < 12) {
      return res.status(400).json({ message: "Password is too small" });
    }
    const admin = await Admin.findOne({ email });
    if (admin) {
      return res.status(400).json({ message: "Email in use already" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newAdmin = new Admin({
      name,
      email,
      password: hashedPassword,
      adminRole,
    });
    if (newAdmin) {
      generateToken(newAdmin._id, res);
      await newAdmin.save();

      res.status(201).json({
        _id: newAdmin._id,
        name: newAdmin.name,
        email: newAdmin.email,
        adminRole: newAdmin.adminRole,
      });
    } else {
      return res.status(400).json({ message: "Invalid Admin Data" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const decodePassword = await bcrypt.compare(password, admin.password);
    if (!decodePassword || decodePassword.length < 12) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    generateToken(admin._id, res);
    res.status(200).json({
      _id: admin._id,
      email: admin.email,
      password: decodePassword,
      name: admin.name,
      adminRole: admin.adminRole,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find().sort({ createdAt: -1 });
    res.status(201).json(customers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().sort({ createdAt: -1 });
    res.status(201).json(restaurants);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find({ adminRole: "Admin" }).sort({
      createdAt: -1,
    });
    res.status(201).json(admins);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateStatus = async (req, res) => {
  console.log(req.params);

  try {
    console.log(req.body);

    const { UserId } = req.params;
    const { status } = req.body;

    let user = await Customer.findByIdAndUpdate(
      UserId,
      { $set: { status } },
      { new: true }
    ).select("-password");

    // If not a customer, try Restaurant
    if (!user) {
      user = await Restaurant.findByIdAndUpdate(
        UserId,
        { $set: { status } },
        { new: true }
      ).select("-password");
    }

    if (!user) {
      user = await Admin.findByIdAndUpdate(
        UserId,
        { $set: { status } },
        { new: true }
      ).select("-password");
    }
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Status updated successfully", user });
  } catch (error) {
    console.error("Error updating status:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });
    res.status(201).json(complaints);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
