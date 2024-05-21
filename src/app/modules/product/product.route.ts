import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

// this will call controller function
router.post("/", ProductController.createNewProduct);

export const ProductsRoute = router;
