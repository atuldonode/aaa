import express from "express";
const routes = express();

import { upload } from "../helper/multer.js"

// Define Employee Routes
import  {createEmployee, editEmployee, employeeList, deleteEmployee, filterData} from "../controller/employe.js";

routes.post("/create", upload, createEmployee);
routes.get("/allList", employeeList);
routes.put("/edit/:id", editEmployee);
routes.delete("/delete/:id", deleteEmployee);
routes.post("/filter", filterData);

// Define country Routes
import {getCountries, getStates} from "../controller/countryState.js"
routes.get("/country", getCountries);
routes.get("/state", getStates);
export default routes;