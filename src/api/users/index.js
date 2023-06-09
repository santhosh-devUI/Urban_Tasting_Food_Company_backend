import { Router } from "express";
import{
signup,
login,
getProfile,
verifyEmail,
updateProfile,
startBooking,
viewAllBookings,
updateBooking,
allBranches,
viewCancelledBranches,
showMyBranchSlots,
viewUserBookings,
viewSlotsByType,
forgotPassword,
updateSlotsCount,
showAllSlots
} from "./controller"

const router=new Router()

router.post('/signup',signup)

router.get('/verify',verifyEmail)

router.post('/login', login)

router.get('/getprofile/:id', getProfile)

router.put('/profile/:id', updateProfile)

router.post('/booking',startBooking)

router.get('/allbookings', viewAllBookings)

router.get('/showbookings', viewUserBookings)

router.put('/changebooking/:id', updateBooking)

router.get('/branches', allBranches)

router.get('/cancelbranches',viewCancelledBranches)

router.post('/slots', viewSlotsByType)

router.get('/allslots', showAllSlots)

router.get('/branchslot',showMyBranchSlots)

router.put('/slotupdate/:id', updateSlotsCount)

router.get('/forgotpwd', forgotPassword)

export default router