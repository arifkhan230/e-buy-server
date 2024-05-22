import { ObjectId } from "mongoose";
import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";

// creating new product
const createNewProductToDB = async (product: IProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

// getting all products
const getAllProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

// getting single product
const getSingleProductFromDB = async (productId: string) => {
  const result = await ProductModel.findOne({ _id: productId });
  return result;
};

// updating a product
const updateSingleProductToDB = async (
  productId: string,
  product: IProduct
) => {
  const result = await ProductModel.findOneAndUpdate(
    { _id: productId },
    { $set: { ...product } },
    { new: true }
  );
  return result;
};

export const ProductServices = {
  createNewProductToDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateSingleProductToDB,
};
