import express from "express";
import { OrderController } from "./order.controller";

const router = express.Router();

router.get("/", OrderController.getAllOrders);
router.post("/", OrderController.createNewOrder);

export const OrderRoute = router;
