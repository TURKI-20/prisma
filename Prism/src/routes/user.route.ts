// import { findAllUser , createUser, updateUser , deleteUser} from '../controller/user'
// import express, { Router } from 'express'

// let route = express.Router()

// route.get('/',findAllUser);
// route.post('/',createUser)
// route.put('/:id',updateUser); 
// route.delete('/:id',deleteUser); 

// export default route;


import  express from "express";
import { login, register } from "../controller/user";

const router = express.Router();

router.post('/', register)
router.get('/', login)



export default router;