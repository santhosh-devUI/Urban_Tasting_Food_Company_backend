import { Router } from "express";

import{
    login,
    addBranch,
    viewBranches,
    viewCancelledBranches,
    updateBranch,
    deleteBranch,
    addSlot,
    viewSlots,
    showSlotsBasedOnBranch,
    updateSlot,
    deleteSlot,
    showUsers,
    updateUser,
    addBookings,
    viewBookings,
    updateBookings,
    deleteBookings,
    viewBranchBasedOnID,
    showUserBookings,
    showSlotBasedOnId
} from "./controller"

const router=new Router()

router.post('/login',login)

router.get('/showusers', showUsers)

router.put('/updateuser/:id', updateUser)

router.post('/addbranch',addBranch)

router.get('/showbranches',viewBranches)

router.get('/cancelbranches',viewCancelledBranches)

router.get('/viewbranch/:id', viewBranchBasedOnID)

router.put('/updatebranch/:id',updateBranch),

router.delete('/deletebranch/:id', deleteBranch)

router.post('/addslot',addSlot)

router.get('/showslots',viewSlots)

router.get('/slotid/:id', showSlotBasedOnId)

router.get('/branchslots',showSlotsBasedOnBranch)

router.put('/updateslot/:id',updateSlot),

router.delete('/deleteslot/:id', deleteSlot)

router.post('/addbooking', addBookings)

router.get('/showbookings', viewBookings)

router.put('/updatebookings/:id',updateBookings)

router.delete('/deletebooking/:id', deleteBookings)

router.post('/userbookings', showUserBookings)




export default router