import express from "express";
import { create, fetch } from "../controller/candyStoreController.js";

const routeCandy = express.Router();

routeCandy.post("/create", create);
routeCandy.get("/getAll", fetch);

export default routeCandy;