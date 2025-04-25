import { generateToken } from "../lib/utils.js";
import Admin from "../models/admin.model.js";
import Customer from "../models/customer.model.js";
import Restaurant from "../models/restaurant.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { adminName, adminEmail, adminPassword, adminRole } = req.body;
  try {
    if (!adminName || !adminEmail || !adminPassword) {
      return res.status(400).json({ message: "Required Fields are Missing" });
    }
    if (adminPassword.length < 12) {
      return res.status(400).json({ message: "Password is too small" });
    }
    const admin = await Admin.findOne({ adminEmail });
    if (admin) {
      return res.status(400).json({ message: "Email in use already" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(adminPassword, salt);
    const newAdmin = new Admin({
      adminName,
      adminEmail,
      adminPassword: hashedPassword,
      adminRole,
    });
    if (newAdmin) {
      generateToken(newAdmin._id, res);
      await newAdmin.save();

      res.status(201).json({
        _id: newAdmin._id,
        adminName: newAdmin.adminName,
        adminEmail: newAdmin.adminEmail,
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
  const { adminEmail, adminPassword } = req.body;
  try {
    const admin = await Admin.findOne({ adminEmail });
    if (!admin) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const password = await bcrypt.compare(adminPassword, admin.adminPassword);
    if (!password || password.length < 12) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    generateToken(admin._id, res);
    res.status(200).json({
      _id: admin._id,
      adminEmail: admin.adminEmail,
      adminPassword: password,
      adminName: admin.adminName,
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
