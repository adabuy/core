import { BadRequestError, expressBodyValidator } from "@alphaicterus/global";
import { Request, Response } from "express";
import { CREATE_PRODUCT } from "../utils/body-validator";
import { createOrder } from "./transactions/create-order";

const createOrderMiddlewares = [ expressBodyValidator];

/**ADMIN | HANDLER | POST
 * 
 * Creates a new order
 */
const createOrderHandler = async (req: Request, res: Response) => {

  const productCreated = await createOrder(req.body);


  if (!productCreated.success) {
    throw new BadRequestError("CREATE_ERROR");
  }

  res.status(200).send(productCreated);
};

export { createOrderMiddlewares, createOrderHandler  };
