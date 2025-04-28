import Order from "../models/order.model.js";
import Product from "../models/product.model.js";
import Restaurant from "../models/restaurant.model.js";

export const addToCart = async (req, res) => {
  try {
    const { _id } = req.entity;
    const productId = req.params.id;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(400).json({ message: "Product does not Exist" });
    }
    const existingOrder = await Order.findOne({ productId });
    if (existingOrder) {
      const updatedOrder = await Order.findOneAndUpdate(
        { productId },
        { $inc: { totalItem: 1 } },
        { new: true }
      );
      res.status(201).json({ message: "Added to Cart" });
      return updatedOrder;
    }
    const restaurantId = product.restaurantId;
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(400).json({ message: "Restaurant does not Exist" });
    }
    const newOrder = new Order({
      productId: productId,
      restaurantId: restaurantId,
      customerId: _id,
      orderItem: product.name,
      totalAmount: product.price,
    });

    await newOrder.save();

    res.status(201).json({ message: "Added to Cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const viewCart = async (req, res) => {
  try {
    const cart = await Order.find({ customerId: req.entity._id }).sort({
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
    const updatedCart = req.body;
    const updatePromises = updatedCart.map((item) => {
      return Order.findOneAndUpdate(
        { productId: item.productId }, // Find by productId field
        { $set: { totalItem: item.totalItem } }, // Update the quantity
        { new: true }
      );
    });
    await Promise.all(updatePromises);

    res.status(200).json({ message: "Cart updated successfully ✅" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update cart ❌" });
  }
};
