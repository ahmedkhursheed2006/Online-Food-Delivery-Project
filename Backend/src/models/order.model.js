import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  totalItem: {
    type: Number,
    default: 1,
  },
  totalPrice: {
    type: Number,
  },
  orderItem: {
    type: String,
  },
  orderStatus: {
    type: String,
    enum: ["pending", "completed", "cancelled"],
    default: "pending",
  },
  paymentStatus: {
    type: String,
    enum: ["paid", "unpaid"],
    default: "unpaid",
  },
  paymentMethod: {
    type: String,
    enum: ["creditCard", "debitCard", "CoD"], //CoD = Cash on Delivery
    default: "CoD",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  deliveryAddress: {
    type: String,
  },
});
const Order = mongoose.model("Order", orderSchema, "orders");
export default Order;
