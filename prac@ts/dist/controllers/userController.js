"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userService_1 = require("../services/userService");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, userService_1.findAll)();
        res.send(result);
    }
    catch (error) {
        res.status(404).send("error");
    }
}));
exports.userRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, userService_1.findById)(Number(req.params.id));
        res.json(result);
    }
    catch (error) {
        // logger
        res.status(404).json('Error');
    }
}));
exports.userRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newItems = {
        id: Number(req.body.id),
        title: req.body.title,
        body: req.body.body
    };
    try {
        const result = yield (0, userService_1.postdata)(newItems);
        res.status(200).json(result);
    }
    catch (err) {
        res.json('err');
    }
}));
exports.userRouter.delete('/:id', (req, res) => {
    let id = Number(req.params.id);
    const result = (0, userService_1.deleteById)(id);
    res.status(200).json({ message: "Item Deleted Successfully", data: result });
});
exports.userRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = Number(req.params.id);
    let updatedData = req.body;
    console.log(req.body);
    try {
        const result = yield (0, userService_1.updateItem)(id, updatedData);
        res.status(200).json(result);
    }
    catch (err) {
        res.json(err);
    }
}));
