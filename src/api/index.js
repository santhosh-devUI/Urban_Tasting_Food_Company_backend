import { Router } from "express";
import Admin from "./admin";
import User from "./users"


const router=new Router()

router.use('/admin',Admin)

router.use('/user',User)

export default router