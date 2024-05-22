import { ObjectId } from "mongoose";
import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";

// creating new product
const createNewProductToDB = async (product: IProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

// getting all products
const getAllProductFromDB = async (searchTerm: any) => {
  if (searchTerm) {
    const result = await ProductModel.find({
      $or: [
        { name: { $regex: `${searchTerm}`, $options: "i" } },
        { description: { $regex: `${searchTerm}`, $options: "i" } },
        { category: { $regex: `${searchTerm}`, $options: "i" } },
      ],
    });
    return result;
  }
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

// delete a product
const deleteSingleProductFromDB = async (productId: string) => {
  const result = await ProductModel.findOneAndDelete({ _id: productId });
  return result;
};

export const ProductServices = {
  createNewProductToDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateSingleProductToDB,
  deleteSingleProductFromDB,
};
