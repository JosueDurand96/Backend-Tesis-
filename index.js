import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser";
import dotenv from "dotenv"
import route from "./routes/userRoute.js";
import routeParent from "./routes/parentRoute.js";
import routeSchool from "./routes/schoolRoute.js";
import routeWorker from "./routes/workerRoute.js";
import routeStudent from "./routes/studentRoute.js";

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