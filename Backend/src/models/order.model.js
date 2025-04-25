import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
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
    totalAmount: {
        type: Number,
        required: true,
    },
    orderItems: {
        type: Array,
        required: true,
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
        required: true,
    },

});
const Order = mongoose.model("Order", orderSchema, "orders");
export default Order;
