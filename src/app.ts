import express, { Request, Response } from "express";
import cors from "cors";
import { ProductsRoute } from "./app/modules/product/product.route";
const app = express();

// parser
app.use(express.json());
app.use(cors());

//applications routes
app.use("/api/v1/products", ProductsRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
