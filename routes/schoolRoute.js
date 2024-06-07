import express from "express";
import { create, fetch, update, deleteSchool } from "../controller/schoolController.js";

const routeSchool = express.Router();

routeSchool.post("/create", create);
route.get("/getAll", fetch);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteSchool);

export default routeSchool;