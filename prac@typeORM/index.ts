import express, {Request, Response} from "express";
const app = express();
import {createConnection} from "typeorm"
import "reflect-metadata";
import { router } from "./routes/routes";


require('dotenv').config();
const port = process.env.PORT || 3000;



app.use(express.json());
// app.use(express.urlencoded({extended : false}))
app.use('/', router)



createConnection().then(()=>{
     console.log("Db connected successfully!");
}).catch((err)=>{
     console.log("Error connecting database!!!");
}
)
 

app.listen(port, ()=>{
console.log(`Server is listening to port ${port}`);

})