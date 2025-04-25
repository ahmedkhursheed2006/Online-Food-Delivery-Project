import Complaint from "../models/complaint.model.js";

export const sendComplaint = async (req, res) => {
  console.log(req.body);

  const { complaintText, complaintReason, customerId } = req.body;
  try {
    if (!complaintReason || !complaintText || !customerId) {
      return res.status(400).json({ message: "Required Fieds not available" });
    }
    const newCompaint = new Complaint({
      complaintReason,
      complaintText,
      customerId,
    });
    if (newCompaint) {
      newCompaint.save();
      return res.status(201).json({ message: "Complaint Sent" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Internal Server Error" });
  }
};
