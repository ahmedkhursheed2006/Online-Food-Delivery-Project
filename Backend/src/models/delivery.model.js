import mongoose from "mongoose";

const deliverySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        reuqired: true,
    },
    currentLocation: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    assignedOrders: {
        type: Array,
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});
const Delivery = mongoose.model("Delivery", deliverySchema);
export default Delivery;
