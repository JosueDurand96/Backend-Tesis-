import express from "express";
import { create, fetch } from "../controller/payController.js";

const routePay = express.Router();

routePay.post("/create", create);
routePay.get("/getAll", fetch);

export default routePay;