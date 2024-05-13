import express from "express";
import { create } from "../controller/deliveryPersonController.js";

const routeDeliveryPerson = express.Router();

routeDeliveryPerson.post("/create", create);

export default routeDeliveryPerson;