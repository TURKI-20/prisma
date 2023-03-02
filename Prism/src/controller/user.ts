// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
// import { Request , Response } from "express";

// export const findAllUser = async(req:Request, res:Response)=>{
//     let users = await prisma.user.findMany();
//     console.log(users);
//     res.json(users);
// }

// export const createUser = async(req:Request, res:Response)=>{
//     let user = await prisma.user.create({
//         data:{
//             email: req.body.email,
//             name: req.body.name
//         }
//     })
//     res.json({"message": "user created!", "user":user})
// }

// export const updateUser = async (req:Request,res:Response)=>{
//     let user = await prisma.user.update({
//         where:{
//             id: parseInt(req.params.id)
//         },
//         data:{
//             email: req.body.email,
//             name: req.body.name
//         }
//     });
//     res.json({"msg": "user updated", "user":user});
// }

// export const deleteUser = async (req:Request,res:Response)=>{
//     let user = await prisma.user.delete({
//         where:{
//             id: parseInt(req.params.id)
//         }
//     });
//     res.json({"msg": "user deleted", "user":user});
// }
import {prisma} from '../conf/db'
import { Request, Response } from "express";

 
export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  let user = await prisma.user.create({
    data: {
      username,
      email,
      password,
    },
  });
  res.send(user);
};


export const login = async (req: Request, res: Response) => {
    const { username, password} = req.body ;
    let user = await prisma.user.findMany({
      where: {
        username,
        password,
      },
    });
    res.json({"message": `welcome ${username}`});
  };