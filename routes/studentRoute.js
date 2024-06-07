import express from "express";
import { create, fetch, update, deleteStudent } from "../controller/studentController.js";

const routeStudent = express.Router();

routeStudent.post("/create", create);
routeStudent.get("/getAll", fetch);
routeStudent.put("/update/:id", update);
routeStudent.delete("/delete/:id", deleteStudent);

export default routeStudent;