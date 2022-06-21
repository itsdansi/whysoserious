

import express, { Express, Request, Response, Router} from "express";
const app: Express = express();
import { userRouter } from "./controllers/userController";


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require ('dotenv').config();

const port = process.env.PORT || 3000;

 app.use("/user",userRouter)

 app.listen(port,()=>{
    console.log(`Server is listening port ${port}`);
    
 })
