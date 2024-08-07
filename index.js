import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser";
import dotenv from "dotenv"
import route from "./routes/userRoute.js";
import routeParent from "./routes/parentRoute.js";
import routeSchool from "./routes/schoolRoute.js";
import routeWorker from "./routes/workerRoute.js";
import routeStudent from "./routes/studentRoute.js";
import routeDeliveryPerson from "./routes/deliveryPersonRoute.js";
import routeMovie from "./routes/movieRoute.js";
import routePeli from "./routes/peliRoute.js";
import routeCandy from "./routes/candyStoreRoute.js";
import routePay from "./routes/payRoute.js";

const app = express();

app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL

mongoose.connect(MONGOURL).then( ()=> {

    console.log("Database is connected successfully!");

    app.listen(PORT, () => {
        console.log(`Server is running in port ${PORT}`);
    });
})
.catch((error) => console.log(error));

app.use("/api/user", route);
app.use("/api/parent", routeParent);
app.use("/api/school", routeSchool);
app.use("/api/worker", routeWorker);
app.use("/api/student", routeStudent);
app.use("/api/delivery_people", routeDeliveryPerson);
app.use("/api/delivery_people", routeDeliveryPerson);
app.use("/api/movie", routeMovie);
app.use("/api/peli", routePeli);
app.use("/api/candy", routeCandy);
app.use("/api/pay", routePay);