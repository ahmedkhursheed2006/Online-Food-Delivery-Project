import { generateToken } from "../lib/utils.js";
import Restaurant from "../models/restaurant.model.js";
import Customer from "../models/customer.model.js";
import bcrypt from "bcryptjs";
import cloudinary from "cloudinary";
import { restaurantValidationSchema } from "../lib/utils.js";

export const signup = async (req, res) => {
  const { error, value } = restaurantValidationSchema.validate(req.body);
  try {
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const restaurant = await Restaurant.findOne({
      email: value.email,
    });
    if (restaurant) {
      return res
        .status(400)
        .json({ message: "Restaurant email is already registered." });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(value.restaurantPassword, salt);
    const newRestaurant = new Restaurant({
      ...value,
      password: hashedPassword,
    });
    await newRestaurant.save();
    generateToken(newRestaurant._id, res);
    res.status(201).json({
      _id: newRestaurant._id,
      name: newRestaurant.name,
      email: newRestaurant.email,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "internal server error:", error });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide email and password" });
    }
    const restaurant = await Restaurant.findOne({ email });
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    const isMatch = await bcrypt.compare(password, restaurant.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    generateToken(restaurant._id, res);
    const { password: _, ...restaurantData } = restaurant._doc;
    res.status(200).json({
      message: "Login successful",
      data: restaurantData,
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const checkAuth = (req, res) => {
  try {
    res.status(200).json(req.entity);
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

export const updateProfile = async (req, res) => {
  try {
    const { profilePic } = req.body;

    if (!profilePic) {
      return res
        .status(400)
        .json({ message: "Please provide a profile picture" });
    }

    const uploadResponse = await cloudinary.uploader.upload(profilePic);
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      req.entity._id,
      { kitchenImage: uploadResponse.secure_url },
      { new: true }
    );

    res.status(200).json(updatedRestaurant);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Internal server error" });
  }
};
