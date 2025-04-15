import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
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
    complaintText: {
        type: String,
        required: true,
    },
    complaintStatus: {
        type: String,
        enum: ["Pending", "Resolved"],
        default: "Pending",
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
const Complaint = mongoose.model("Complaint", complaintSchema);
export default Complaint;