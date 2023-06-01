import adminModel from "./adminModel";
import branchModel from "../common/branchesModel";
import slotModel from "../common/slotsSchema";
import userModel from "../common/userModel";
import bookingModel from "../common/bookingModel";

export const login=(req,res)=>{
    adminModel.find({"username":req.body.username,"password":req.body.password})
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })
}


export const addBranch=(req,res)=>{
    branchModel.create(req.body)
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })
}

export const viewBranches=(req,res)=>{
    branchModel.find({})
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })
}

export const updateBranch=(req,res)=>{
    branchModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })
}

export const deleteBranch=(req,res)=>{
    branchModel.findByIdAndDelete(req.params.id)
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })
}

export const addSlot=(req,res)=>{
    slotModel.create(req.body)
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })
}

export const viewSlots=(req,res)=>{
    slotModel.find({})
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })
}

export const updateSlot=(req,res)=>{
    slotModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })
}

export const deleteSlot=(req,res)=>{
    slotModel.findByIdAndDelete(req.params.id)
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })
}

export const showUsers=(req,res)=>{
    userModel.find({})
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })
}

export const addBookings=(req,res)=>{
    bookingModel.create(req.body)
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })
}

export const viewBookings=(req,res)=>{
    bookingModel.find({})
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })
}

export const updateBookings=(req,res)=>{
    bookingModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })
}

export const deleteBookings=(req,res)=>{
    bookingModel.findByIdAndDelete(req.params.id)
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })
}

 