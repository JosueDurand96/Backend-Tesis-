import express from "express";
import { create, fetch } from "../controller/peliController.js";

const routePeli = express.Router();

routePeli.post("/create", create);
routePeli.get("/getAll", fetch);

export default routePeli;