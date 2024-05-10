import express from "express";
import { fetch, create, update } from "../controller/userController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getAllUser", fetch);
route.put("/update/:id", update);

export default route;