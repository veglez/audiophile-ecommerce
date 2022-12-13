import { setupWorker, rest } from "msw";
import products from "./database";

export const handlers = [
  rest.get("/products", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(products));
  }),
  rest.post("/product", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: "You have added a product, not true xD",
      })
    );
  }),
];

export const worker = setupWorker(...handlers);
