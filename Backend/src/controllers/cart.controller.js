import Customer from "../models/customer.model.js";
import Restaurant from "../models/restaurant.model.js";
import Product from "../models/product.model.js";
import Cart from "../models/cart.model.js";

export const addToCart = async (req, res) => {
  try {
    const { _id } = req.entity;
    const productId = req.params.id;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(400).json({ message: "Product does not Exist" });
    }
    const existingOrder = await Cart.findOne({ productId });
    if (existingOrder) {
      const updatedOrder = await Cart.findOneAndUpdate(
        { productId },
        { $inc: { totalItem: 1 } },
        { new: true }
      );
      res.status(201).json({ message: "Added to Cart" });
      return updatedOrder;
    }

    const newCart = new Cart({
      productId: productId,
      restaurantId: product.restaurantId,
      customerId: _id,
      name: product.name,
      price: product.price,
    });

    await newCart.save();

    res.status(201).json({ message: "Added to Cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const viewCart = async (req, res) => {
  try {
    const cart = await Cart.find({ customerId: req.entity._id }).sort({
      createdAt: -1,
    });

    res.status(201).json(cart);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateCart = async (req, res) => {
  try {
    

    const { id } = req.params;
    const { amount } = req.body;
    const cart = await Cart.findByIdAndUpdate(
      id,
      { $set: { amount: amount } },
      { new: true }
    );
    console.log(cart);

    res.status(201).json({ message: "Item Updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update cart ❌" });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const { id } = req.params;
    await Cart.findByIdAndDelete(id);
    res.status(201).json({ message: "Product Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
