import { Request, Response } from "express";
import { ProductServices } from "./product.service";

// adding new data to mongodb
const createNewProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body.product;
    const result = await ProductServices.createNewProductToDB(product);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Something went wrong upon creating product",
      err,
    });
  }
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductFromDB();
    res.status(200).json({
      success: true,
      message: "retrieved all products",
      result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Something went wrong upon getting all product",
      err,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "retrieved single product",
      result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Something went wrong upon getting single product",
      err,
    });
  }
};

// updating a single product
const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { product } = req.body;
    const { productId } = req.params;
    const result = await ProductServices.updateSingleProductToDB(
      productId,
      product
    );
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Something went wrong upon updating single product",
      err,
    });
  }
};

export const ProductController = {
  createNewProduct,
  getAllProduct,
  getSingleProduct,
  updateSingleProduct,
};
