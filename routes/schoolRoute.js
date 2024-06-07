import express from "express";
import { create, fetch, update, deleteSchool } from "../controller/schoolController.js";

const routeSchool = express.Router();

routeSchool.post("/create", create);
routeSchool.get("/getAll", fetch);
routeSchool.put("/update/:id", update);
routeSchool.delete("/delete/:id", deleteSchool);

export default routeSchool;