import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createNewProductToDB = async (product: IProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

export const ProductServices = {
  createNewProductToDB,
};
