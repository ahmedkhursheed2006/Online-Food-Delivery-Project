import jwt from "jsonwebtoken";
import Joi from "joi";
export const generateToken = (EntityID, res) => {
  const token = jwt.sign({ id: EntityID }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("jwt", token, {
    maxage: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    samesite: "strict",
    secure: process.env.NODE_ENV !== "production",
  });

  return token;
};

export const restaurantValidationSchema = Joi.object({
  // 🏪 Restaurant Details
  name: Joi.string().min(2).required(),
  address: Joi.string().min(5).required(),
  phoneNumber: Joi.string()
    .pattern(/^[0-9]{11}$/)
    .required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  city: Joi.string(),
  businessType: Joi.string()
    .valid("restaurant", "cloudKitchen", "takeOut")
    .required(),
  cuisineType: Joi.string().required(),
  // kitchenImage: Joi.any(), // can also use Joi.string().uri() if it's a URL
  kichenImage: Joi.string().uri(),
  // 👤 Owner/Manager
  ownerName: Joi.string().min(2).required(),
  ownerContactNumber: Joi.string()
    .pattern(/^[0-9]{11}$/)
    .required(),
  ownerContactEmail: Joi.string().email().required(),
  governmentID: Joi.string().required(),

  // 🏦 Bank Details
  bankName: Joi.string().required(),
  accountNumber: Joi.string().required(),
  accountTitle: Joi.string().required(),
  ibanNumber: Joi.string().required(),
  paymentCycle: Joi.string().valid("weekly", "biweekly", "monthly").required(),
});

export const productValidationSchema = Joi.object({
  name: Joi.string().required(),
  category: Joi.string().required(),
  price: Joi.string().required(),
  ingredients: Joi.string().required(),
  restaurantId: Joi.string().required(),
  productImg: Joi.string().uri(),
});
