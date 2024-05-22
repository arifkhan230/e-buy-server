import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { ProductsRoute } from "./app/modules/product/product.route";
import { OrderRoute } from "./app/modules/order/order.route";
const app = express();

// parser
app.use(express.json());
app.use(cors());

//applications routes
app.use("/api/products", ProductsRoute);
app.use("/api/orders", OrderRoute);

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Welcome to e-buy server" });
});

// for wrong route
app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "Route not found",
  });
});

// global error handler
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(400).json({
      success: false,
      message: "something went wrong",
    });
  } else {
    next();
  }
});

export default app;
