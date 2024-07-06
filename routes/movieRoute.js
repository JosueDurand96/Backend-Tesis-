import express from "express";
import { create, fetch } from "../controller/movieController.js";

const routeMovie = express.Router();

routeMovie.post("/create", create);
routeMovie.get("/getAll", fetch);

export default routeMovie;