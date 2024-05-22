import Joi from "joi";

const orderValidationSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.base": "Email should be a type of text",
    "string.empty": "Email cannot be an empty field",
    "string.email": "Email must be a valid email address",
    "any.required": "Email is required",
  }),
  productId: Joi.string().required().messages({
    "string.base": "Product ID should be a type of text",
    "string.empty": "Product ID cannot be an empty field",
    "any.required": "Product ID is required",
  }),
  price: Joi.number().positive().strict().required().messages({
    "number.base": "Price should be a type of number",
    "number.positive": "Price must be a positive number",
    "any.required": "Price is required",
  }),
  quantity: Joi.number().positive().strict().required().messages({
    "number.base": "Quantity should be a type of number",
    "number.integer": "Quantity must be an integer",
    "number.positive": "Quantity must be a positive number",
    "any.required": "Quantity is required",
  }),
});

export default orderValidationSchema;
