import { Schema, model } from "mongoose";
import { IOrder } from "./order.interface";
import { ProductModel } from "../product/product.model";

const orderSchema = new Schema<IOrder>({
  email: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

// post save middleware/hook

orderSchema.post("save", async function (doc) {
  const order = doc;
  const product: any | unknown = await ProductModel.findOne({
    _id: order.productId,
  });

  const updateQuantity = product?.inventory?.quantity - order?.quantity;

  const data = await ProductModel.findByIdAndUpdate(
    order.productId,
    { $set: { "inventory.quantity": updateQuantity } },
    { new: true }
  );

  if (data?.inventory?.quantity === 0) {
    await ProductModel.findByIdAndUpdate(
      order.productId,
      { $set: { "inventory.inStock": false } },
      { new: true }
    );
  }
});

export const OrderModel = model<IOrder>("Order", orderSchema);
