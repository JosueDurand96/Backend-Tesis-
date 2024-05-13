import express from "express";
import { create, login } from "../controller/parentController.js";

const routeParent = express.Router();

routeParent.post("/create", create);
routeParent.post("/login", login);

export default routeParent;