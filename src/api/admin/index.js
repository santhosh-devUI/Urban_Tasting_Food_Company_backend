import { Router } from "express";

import{
    login,
    addBranch,
    viewBranches,
    updateBranch,
    deleteBranch,
    addSlot,
    viewSlots,
    updateSlot,
    deleteSlot,
    showUsers,
    addBookings,
    viewBookings,
    updateBookings,
    deleteBookings
} from "./controller"

const router=new Router()

router.post('/login',login)

router.get('/showusers', showUsers)

router.post('/addbranch',addBranch)

router.get('/showbranches',viewBranches)

router.put('/updatebranch/:id',updateBranch),

router.delete('/deletebranch/:id', deleteBranch)

router.post('/addslot',addSlot)

router.get('/showslots',viewSlots)

router.put('/updateslot/:id',updateSlot),

router.delete('/deleteslot/:id', deleteSlot)

router.post('/addbooking', addBookings)

router.get('/showbookings', viewBookings)

router.put('/updatebookings/:id',updateBookings)

router.delete('/deletebooking/:id', deleteBookings)




export default router