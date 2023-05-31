import { Router } from "express";
import{
signup,
login,
verifyEmail
} from "./controller"

const router=new Router()

router.post('/signup',signup)

router.get('/verify',verifyEmail)

router.post('/login', login)



export default router