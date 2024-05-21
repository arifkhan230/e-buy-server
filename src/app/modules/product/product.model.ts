// defining schema for product

import { Schema, model } from "mongoose";
import { IInventory, IProduct, IVariants } from "./product.interface";

// schema for product variants
const variantsSchema = new Schema<IVariants>({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

// schema for inventory
const inventorySchema = new Schema<IInventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

// schema for product
const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  variants: {
    type: [variantsSchema],
    required: true,
  },
  inventory: {
    type: inventorySchema,
    required: true,
  },
});

export const ProductModel = model<IProduct>("Product", productSchema);
