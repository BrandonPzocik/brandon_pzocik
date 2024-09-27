// ? CREAR LAS VALIDACIONES PARA LAS ORDERS AQUÍ
import { body } from "express-validator";

export const createOrderValidations = [
  body("cooffe")
    .isString()
    .withMessage("debe ser un string")
    .notEmpty.withMessage("no debe estar vacio"),
  body("userId").isString,
];
