import express from "express";
import { create } from "../controller/parentController.js";

const routeParent = express.Router();

routeParent.post("/create", create);

export default routeParent;