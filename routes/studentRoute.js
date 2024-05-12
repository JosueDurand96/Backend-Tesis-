import express from "express";
import { create } from "../controller/studentController.js";

const routeStudent = express.Router();

routeStudent.post("/create", create);

export default routeStudent;