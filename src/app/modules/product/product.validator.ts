import Joi from "joi";

const variantsValidationSchema = Joi.object({
  type: Joi.string().required().messages({
    "string.base": "Variant type should be a string",
    "any.required": "Variant type is required",
  }),
  value: Joi.string().required().messages({
    "string.base": "Variant value should be a string",
    "any.required": "Variant value is required",
  }),
});

const inventoryValidationSchema = Joi.object({
  quantity: Joi.number().integer().strict().min(0).required().messages({
    "number.base": "Quantity should be a number",
    "number.integer": "Quantity must be an integer",
    "number.min": "Quantity cannot be negative",
    "any.required": "Quantity is required",
  }),
  inStock: Joi.boolean().required().strict().messages({
    "boolean.base": "InStock should be a boolean",
    "any.required": "InStock is required",
  }),
});

const productValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Name should be a string",
    "any.required": "Name is required",
  }),
  description: Joi.string().required().messages({
    "string.base": "Description should be a string",
    "any.required": "Description is required",
  }),
  category: Joi.string().required().messages({
    "string.base": "Category should be a string",
    "any.required": "Category is required",
  }),
  tags: Joi.array().items(Joi.string()).required().messages({
    "array.base": "Tags should be an array",
    "any.required": "Tags are required",
  }),
  variants: Joi.array().items(variantsValidationSchema).required().messages({
    "array.base": "Variants should be an array",
    "any.required": "Variants are required",
  }),
  inventory: inventoryValidationSchema.required().messages({
    "object.base": "Inventory should be an object",
    "any.required": "Inventory is required",
  }),
});

export default productValidationSchema;
