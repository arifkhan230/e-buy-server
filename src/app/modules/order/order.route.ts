import express from "express";
import { OrderController } from "./order.controller";

const router = express.Router();

router.post("/", OrderController.createNewOrder);

export const OrderRoute = router;
