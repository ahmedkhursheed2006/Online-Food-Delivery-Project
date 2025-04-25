import { productValidationSchema } from "../lib/utils.js";
import Product from "../models/product.model.js";

export const addProduct = async (req, res) => {
  const { error, value } = productValidationSchema.validate(req.body);
  try {
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const newProduct = new Product({
      ...value,
    });
    newProduct.save();
    res.status(201).json({ message: "Product Added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error:", error });
  }
};

export const getProduct = async (req, res) => {
  try {
    const products = await Product.find({ restaurantId: req.entity._id }).sort({
      createdAt: -1,
    });
    res.status(201).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(201).json({ message: "Product Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
