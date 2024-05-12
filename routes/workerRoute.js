import express from "express";
import { create } from "../controller/workerController.js";

const routeWorker = express.Router();

routeWorker.post("/create", create);

export default routeWorker;