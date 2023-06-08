import { Router } from "express";
import{
signup,
login,
getProfile,
verifyEmail,
updateProfile,
startBooking,
updateBooking,
allBranches
} from "./controller"

const router=new Router()

router.post('/signup',signup)

router.get('/verify',verifyEmail)

router.post('/login', login)

router.get('/getprofile/:id', getProfile)

router.put('/profile/:id', updateProfile)

router.post('/booking',startBooking)

router.put('/changebooking/:id', updateBooking)

router.get('/branches', allBranches)

export default router