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

export const viewCancelledBranches=(req,res)=>{
    branchModel.find({"status":"Inctive"})
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })
}

export const viewBranchBasedOnID=(req,res)=>{
    branchModel.findById(req.params.id)
    .then((result)=>{
        res.send(result)
        console.log(result);
    })
    .catch((err)=>{
        res.send(err)
    })
}

export const updateBranch=(req,res)=>{
    branchModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((result)=>{
        console.log(result,"re");
        if(result.status=="Deleted"){
            bookingModel.updateMany({"branch_id":result._id},{$set:{"status":"Reject","msg":"branch deleted"}},{multi:true})
            .then(success=>{
                console.log(success);
            })
            .catch(fail=>{
                console.log(fail);
            })

            slotModel.updateMany({"branch":result.location},{$set:{"status":"Deleted","msg":"branch deleted"}})
            .then(success=>{
                console.log(success,"succcc");
            })
            .catch(fail=>{
                console.log(fail, 'fail');
            })
        }else if(result.status=="Inactive"){
            bookingModel.updateMany({"branch_id":result._id},{$set:{"status":"Reject","msg":"branch is inactive"}},{multi:true})
            .then(success=>{
                console.log(success);
            })
            .catch(fail=>{
                console.log(fail);
            })

            slotModel.updateMany({"branch":result.location},{$set:{"status":"Deleted","msg":"branch is inactive"}})
            .then(success=>{
                console.log(success,"succcc");
            })
            .catch(fail=>{
                console.log(fail, 'fail');
            })
        }
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

export const showSlotsBasedOnBranch=(req,res)=>{
    slotModel.find({'branch':req.query.branch})
    .then((result)=>{
        res.send({error:false, data:result})
    })
    .catch((err)=>{
        res.send({error:true, code:err})
    })
}

export const updateSlot=(req,res)=>{
    slotModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((result)=>{
        console.log(result);
        if(result.status=="Deleted"){
            bookingModel.updateMany({"slotId":result._id},{$set:{"status":"Reject","msg":"slot deleted"}},{multi:true})
            .then(success=>{
                console.log(success,"succcc");
            })
            .catch(fail=>{
                console.log(fail, 'fail');
            })
        }else if(result.status=="Inactive"){
            bookingModel.updateMany({"slotId":result._id},{$set:{"status":"Reject","msg":"currently slot not available"}},{multi:true})
            .then(success=>{
                console.log(success,"succcc");
            })
            .catch(fail=>{
                console.log(fail, 'fail');
            })

        }
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
    userModel.find({}).populate('branch')
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
    bookingModel.find().populate('user_id branch_id').then(result=>{
        res.send(result)
    }).catch(err=>{
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

 export const showUserBookings=(req,res)=>{
    bookingModel.find({"user_id":req.body.user_id})
    .then((result)=>{
        res.send({error:false, data:result})
    })
    .catch((err)=>{
        res.send({error:true, message:err})
    })
 }

 export const showSlotBasedOnId=(req,res)=>{
    slotModel.findById(req.params.id)
    .then((result)=>{
        res.send({error:false, data:result})
    })
    .catch((err)=>{
        res.send({error:true, message:err})
    })
 }

 export const updateUser=(req,res)=>{
    userModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((result)=>{
        res.send({error:false, data:result})
    })
    .catch((err)=>{
        res.send({error:true, message:err})
    })
 }