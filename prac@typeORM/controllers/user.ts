import express, {Request, Response} from "express"
import { getRepository } from "typeorm"
import { User } from "../entity/User";

export interface Users {
    firstName : string,
    lastName : string,
    age : number,
    email : string,
    role : 'admin' | 'normal'
}


export const  creatUser = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);

    let user = new User()
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.age = req.body.age;
    user.email = req.body.email;
    user.role = req.body.role
    const data = await userRepository.save(user)


    res.json({
       msg: "data added successfully!",
        data : data
    })
}

export const getUser = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);
    let data = await userRepository.find()
    res.json({
        data
    })
}

export const getUserById = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);
    const data = await userRepository.findBy({id : Number(req.params.id)})
    res.json({
        data
    })
}

export const updateUser = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);
    // const userToUpdate = userRepository.findOneBy({
    // id: Number(req.params.id)})
    let user = new User()
        user.firstName = req.body.firstName
        user.lastName =  req.body.lastName
        user.age = req.body.age
        user.email = req.body.email
        user.role = req.body.role;
    const result = await userRepository.update({
    id: Number(req.params.id)}, user)
    res.json({
        msg: "data updated successfully!",
        result
    })

}

export const deleteUser = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);
//     const userToRemove = await userRepository.findOneByOrFail({
//     id: Number(req.params.id),
// })
  const id = Number(req.params.id);

await userRepository.delete(id)
    res.json({
        msg: "data deleted successfully!",
    })

}
