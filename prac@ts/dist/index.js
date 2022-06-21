"use strict";
// function kgToLbs(weight: number | string) : number {
//     // Narrowing...
//     if(typeof weight === "number")
//         return weight * 2.2;
//     else
//         return parseInt(weight) * 2.2;
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// }
// console.log(kgToLbs(10));
// console.log(kgToLbs("10"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is listening port ${port}`);
});
