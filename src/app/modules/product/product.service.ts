import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createNewProductToDB = async (product: IProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

export const ProductServices = {
  createNewProductToDB,
  getAllProductFromDB,
};
