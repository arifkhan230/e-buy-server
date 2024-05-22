import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import { ProductModel } from "../product/product.model";
import orderValidationSchema from "./order.validator";

// creating new data to mongodb
const createNewOrder = async (req: Request, res: Response) => {
  const order = req.body;
  const product = await ProductModel.findById(order.productId);

  const { error, value } = orderValidationSchema.validate(order);

  if (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      error,
    });
  }

  try {
    if (!product) {
      return res.status(500).json({
        success: false,
        message: "Order not found!",
      });
    } else if (product.inventory.quantity < order.quantity) {
      return res.status(500).json({
        success: false,
        message: "Insufficient quantity available in inventory!",
      });
    } else {
      const result = await OrderServices.createNewOrderToDB(value);
      res.status(200).json({
        success: true,
        message: "Order created successfully!",
        data: result,
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

// getting all orders
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const email: any = req.query.email;

    const result = await OrderServices.getAllOrdersFromDB(email);
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Something went wrong upon getting orders",
      err,
    });
  }
};

export const OrderController = {
  createNewOrder,
  getAllOrders,
};
