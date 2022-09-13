import express from "express";
const routes = express();

import { upload } from "../helper/multer.js"

// Define Employee Routes
import  {createEmployee, editEmployee, employeeList, deleteEmployee} from "../controller/employe.js";

routes.post("/create", upload, createEmployee);
routes.get("/allList", employeeList);
routes.put("/edit/:id", editEmployee);
routes.delete("/delete/:id", deleteEmployee);

// Define country Routes
import {getCountries, getStates} from "../controller/countryState.js"
routes.get("/country", getCountries);
routes.post("/state", getStates);
export default routes;