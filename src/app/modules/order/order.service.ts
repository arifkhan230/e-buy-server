import { IOrder } from "./order.interface";
import { OrderModel } from "./order.model";

// creating new order
const createNewOrderToDB = async (order: IOrder) => {
  const result = await OrderModel.create(order);
  return result;
};

// getting all orders
const getAllOrdersFromDB = async (email: string | undefined) => {
  const query: { email?: string } = {};
  if (email) {
    query.email = email;
  }
  const result = await OrderModel.find(query);
  return result;
};

export const OrderServices = {
  createNewOrderToDB,
  getAllOrdersFromDB,
};
