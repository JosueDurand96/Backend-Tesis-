import express from "express";
import { create } from "../controller/schoolController.js";

const routeSchool = express.Router();

routeSchool.post("/create", create);

export default routeSchool;