import express from "express";
import { create, fetch, update, deleteWorker } from "../controller/workerController.js";

const routeWorker = express.Router();

routeWorker.post("/create", create);
routeWorker.get("/getAll", fetch);
routeWorker.put("/update/:id", update);
routeWorker.delete("/delete/:id", deleteWorker);

export default routeWorker;