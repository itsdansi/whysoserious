import express, {Request, Response} from "express"
    import { getManager } from "typeorm"
import { User } from "../entity/User";

export interface Users {
    // id : number,
    firstName : string,
    lastName : string,
    age : number,
    email : string,
    role : 'admin' | 'normal'
}


export const  creatUser = async (req: Request, res: Response) => {
    const entityManger = getManager();

    let user = new User()
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.age = req.body.age;
    user.email = req.body.email;
    user.role = req.body.role
    let data = await entityManger.save(user)


    res.json({
       msg: "data added successfully!",
        data : data
    })
}

export const getUser = async (req: Request, res: Response) => {
const entityManger = getManager();
let data = await entityManger.find(User)
res.json({
    data
})
}

export const getUserById = async (req: Request, res: Response) => {
const entityManger = getManager();
let data = await entityManger.findBy(User, {id : Number(req.params.id)})
res.json({
    data
})
}

export const updateUser = async (req: Request, res: Response) => {
const entityManger = getManager();
const updatedData = req.body;
let data = await entityManger.update(User,{id : Number(req.params.id)}, updatedData)
res.json({
     msg: "data updated successfully!",
    data
})

}

export const deleteUser = async (req: Request, res: Response) => {
const entityManger = getManager();
const id = (req.params.id)
let data = await entityManger.delete(User,{id: id})
res.json({
    msg: "data deleted successfully!",
    data
})

}
