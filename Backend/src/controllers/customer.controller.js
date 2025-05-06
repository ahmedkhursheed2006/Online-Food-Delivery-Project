import { generateToken } from "../lib/utils.js";
import Customer from "../models/customer.model.js";
import Product from "../models/product.model.js";
import bcrypt from "bcryptjs";
import cloudinary from "../lib/cloudinary.js";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!email || !password || !name) {
      return res.status(400).json({ message: "Please fill all fields" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }
    const customer = await Customer.findOne({ email });
    if (customer)
      return res.status(400).json({ message: "Email already in use" });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newCustomer = new Customer({
      name,
      email,
      password: hashedPassword,
    });

    if (newCustomer) {
      generateToken(newCustomer._id, res);
      await newCustomer.save();

      res.status(201).json({
        _id: newCustomer._id,
        name: newCustomer.name,
        email: newCustomer.email,
      });
    } else {
      res.status(500).json({ message: "Invalid User Data" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const customer = await Customer.findOne({ email });

    if (!customer) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, customer.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    generateToken(customer._id, res);

    res.status(200).json({
      _id: customer._id,
      name: customer.name,
      email: customer.email,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const googleAuth = async (req, res) => {
  const { name, email } = req.body;
  try {
    if (!name || !email) {
      return res.status(400).json({ message: "Google Login Failed" });
    }
    const customer = await Customer.findOne({ email });
    if (customer) {
      generateToken(customer._id, res);
      return res.status(200).json({
        _id: customer._id,
        name: customer.name,
        email: customer.email,
        isGoogleUser: true,
      });
    }
    const newCustomer = new Customer({
      name,
      email,
      isGoogleUser: true,
    });

    if (newCustomer) {
      await newCustomer.save();
      generateToken(newCustomer._id, res);

      res.status(201).json({
        _id: newCustomer._id,
        name: newCustomer.name,
        email: newCustomer.email,
        isGoogleUser: true,
      });
    } else {
      res.status(500).json({ message: "Invalid User Data" });
    }
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

export const checkAuth = (req, res) => {
  try {
    res.status(200).json(req.entity);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getProductsByCity = async (req, res) => {
  try {
    const { city } = req.entity;
    const products = await Product.find().populate({
      path: "restaurantId",
      match: { restaurantCity: city, status: "active" },
      select: "restaurantName restaurantCity cuisineType",
    });
    const filtered = products.filter((p) => p.restaurantId !== null);
    res.status(200).json(filtered);
  } catch (error) {
    console.error("Error fetching products:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { profilePic } = req.body;

    if (!profilePic) {
      return res
        .status(400)
        .json({ message: "Please provide a profile picture" });
    }

    const uploadResponse = await cloudinary.uploader.upload(profilePic);
    const updatedCustomer = await Customer.findByIdAndUpdate(
      req.entity._id,
      { profilePic: uploadResponse.secure_url },
      { new: true }
    );

    res.status(200).json(updatedCustomer);
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ message: "Internal server error" });
  }
};
