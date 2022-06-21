"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateItem = exports.postdata = exports.deleteById = exports.findById = exports.findAll = void 0;
const UserMock_1 = require("../mocks/UserMock");
const findAll = () => {
    return Promise.resolve(UserMock_1.userItems);
};
exports.findAll = findAll;
const findById = (id) => {
    const item = UserMock_1.userItems.find((item) => item.id === id);
    if (item) {
        return Promise.resolve(item);
    }
    return Promise.reject();
};
exports.findById = findById;
const deleteById = (id) => {
    const item = UserMock_1.userItems.filter((item) => item.id = id);
    return Promise.resolve(item);
};
exports.deleteById = deleteById;
const postdata = (item) => {
    UserMock_1.userItems.push(item);
    return Promise.resolve(UserMock_1.userItems);
};
exports.postdata = postdata;
const updateItem = (id, item) => {
    const itemById = UserMock_1.userItems.find((item) => item.id === id);
    if (itemById) {
        itemById.id = item.id;
        itemById.title = item.title;
        itemById.body = item.body;
        return Promise.resolve(itemById);
    }
    else {
        return Promise.reject();
    }
};
exports.updateItem = updateItem;
