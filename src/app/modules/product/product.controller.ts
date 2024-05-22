import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import productValidationSchema from "./product.validator";

// adding new data to mongodb
const createNewProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body.product;
    const { error, value } = productValidationSchema.validate(product);
    if (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
        error,
      });
    }

    const result = await ProductServices.createNewProductToDB(value);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
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
    // searching for product
    const { searchTerm } = req.query;
    // searching product
    if (searchTerm) {
      const result = await ProductServices.getAllProductFromDB(searchTerm);
      return res.status(200).json({
        success: true,
        message: `Products matching search term ${searchTerm} fetched successfully!`,
        data: result,
      });
    }
    // getting all products
    const result = await ProductServices.getAllProductFromDB(searchTerm);
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
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
      message: "Product fetched successfully!",
      data: result,
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
      message: "Product updated successfully!",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Something went wrong upon updating single product",
      err,
    });
  }
};

// delete a single product
const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    await ProductServices.deleteSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
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
  deleteSingleProduct,
};
