import express from "express";
import { creatUser, deleteUser, getUser, getUserById, updateUser } from "../controllers/user";
const router = express.Router();

router.post('/user', creatUser)
router.get('/user', getUser)
router.get('/user/:id', getUserById)
router.patch('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)

export {
    router
}
