import express from "express";
const app = express();
import cors from "cors"
import path from "path";
const PORT = 3000;

app.use(express.json());
app.use(cors());

//fileUpload path
app.use('/files', express.static(path.join('files')));
// Require databasefile
import "./db/db.js"

//Define Routes index file
import routes from "./routes/index.routes.js"
app.use("/api", routes)

//Server Listen
app.listen(PORT, () =>{
    console.log(`Server Running on PORT ${PORT}`);
});