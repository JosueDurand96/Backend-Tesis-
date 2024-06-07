import express from "express";
import { create, fetch, update, deleteDeliveryPerson } from "../controller/deliveryPersonController.js";

const routeDeliveryPerson = express.Router();

routeDeliveryPerson.post("/create", create);
routeDeliveryPerson.get("/getAll", fetch);
routeDeliveryPerson.put("/update/:id", update);
routeDeliveryPerson.delete("/delete/:id", deleteDeliveryPerson);
export default routeDeliveryPerson;