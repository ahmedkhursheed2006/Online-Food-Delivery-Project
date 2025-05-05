import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    orderItem: {
      itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", // or whatever your item model is called
        required: true,
      },
      name: String,
      quantity: Number,
      price: Number,
    },

    totalAmount: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      default: "Cash on Delivery",
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["Paid", "Pending", "Failed"],
      default: "Pending",
    },
    orderStatus: {
      type: String,
      enum: ["Pending", "Preparing", "On the Way", "Delivered", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true } // adds createdAt and updatedAt
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
