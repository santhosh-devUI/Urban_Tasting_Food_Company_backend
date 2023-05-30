import { Router } from "express";
import{
signup,
login
} from "./controller"

const router=new Router()

router.post('/signup',signup)

router.post('/login', login)



export default router