import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import { ProductModel } from "../product/product.model";

// creating new data to mongodb
const createNewOrder = async (req: Request, res: Response) => {
  const { order } = req.body;
  const product = await ProductModel.findById(order.productId);

  try {
    if (!product) {
      return res.status(500).json({
        success: false,
        message: "Order not found!",
      });
    } else if (product.inventory.quantity < order.quantity) {
      return res.status(500).json({
        success: false,
        message: "insufficient product!",
      });
    } else {
      const result = await OrderServices.createNewOrderToDB(order);
      res.status(200).json({
        success: true,
        message: "Order created successfully!",
        result,
      });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Something went wrong upon creating order",
      err,
    });
  }
};

export const OrderController = {
  createNewOrder,
};
