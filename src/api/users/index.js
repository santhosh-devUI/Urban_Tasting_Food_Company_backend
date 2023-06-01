import { Router } from "express";
import{
signup,
login,
verifyEmail,
startBooking,
updateBooking
} from "./controller"

const router=new Router()

router.post('/signup',signup)

router.get('/verify',verifyEmail)

router.post('/login', login)

router.post('/booking',startBooking)

router.put('/changebooking/:id', updateBooking)

export default router