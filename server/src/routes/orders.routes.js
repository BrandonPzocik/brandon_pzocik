import { Router } from "express";
import {
  createOrderCtrl,
  getOrdersCtrl,
} from "../controllers/order.controller.js";
import { applyValidations } from "../validations/apply.validations.js";

const ordersRouter = Router();

// ! NO FUNCIONA LA RUTA /orders
ordersRouter.get("/", getOrdersCtrl);

// ! FALTAN VALIDACIONES DE DATOS
ordersRouter.post("/", createOrderCtrl, applyValidations, createOrderCtrl);

export { ordersRouter };
