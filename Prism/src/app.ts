// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
// import express,{Application , Request , Response} from 'express';
// import userRoutes from './routes/user.route';

// const app:Application = express();
// let port:number = 3004;


// app.use(express.json());
// app.use('/users' , userRoutes)

// app.listen(port, ()=>console.log(`express started ${port}`));

import express, { Application } from "express";
import userRouter from "./routes/user.route";
import blogRoute from "./routes/blog.route";
const app: Application = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/blogs", blogRoute);

let port: number = 3003;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

// app.listen(port,()=>console.log(`express started on port ${port}`));






// const createUser = async () => {
//   try {
//     let user = await prisma.user.create({
//       data: {
//         email: "Tur@testt.com",
//         name: "Ali",
//         age: 22,
//         // courses:{
//         //     create:[
//         //         {name:"course 02"},
//         //         {name:"course 03"}
//         //     ]
//         // }
//       },
//     });
//     console.log(user);
//   } catch (err) {
//     console.log(`there is an error ${err}`);
//   }
// };
// // createUser();

// const updateUser = async () => {
//   let update = await prisma.user.update({
//     where: {
//       id: 5,
//     },
//     data: {
//       name: "Ali",
//       email: "Ali@test.com",
//       age: 22
//     },
//   });
//   if (update) {
//     console.log(update);
//   } else {
//     console.log("err");
//   }
// };
// // updateUser()

// const deleteUser = async () => {
//   let deleteUs = await prisma.user.delete({
//     where: {
//       email: "Ali@test.com",
//     },
//   });
//   if (deleteUs) {
//     console.log("Deleted successfully");
//   } else {
//     console.log("error");
//   }
// };
// // deleteUser();


// const findAllUser = async () => {
//   let users = await prisma.user.findMany({
//     include:{
//         courses:true
//     }
//   });
//   console.log(users);
//   users.map((user) => console.log(`name: ${user.name} his course : ${user.courses}`));
// };
// // findAllUser();


// const createCourse = async () =>{
//     let post = await prisma.course.create({
//         data:{
//             name: "Network",
//             userId: 5
//         }
//     })
//     if(post){
//         console.log(post);
        
//     }else {
//         console.log("error");
        
//     }
// }

// createCourse();