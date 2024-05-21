import { Request, Response } from "express";
import { ProductServices } from "./product.service";

// adding new data to mongodb
const createNewProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body.product;
    console.log(product);
    const result = await ProductServices.createNewProductToDB(product);

    res.status(200).json({
      success: true,
      message: "Product added successfully",
      result,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: "Something went wrong",
      err,
    });
  }
};

export const ProductController = {
  createNewProduct,
};
