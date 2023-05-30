import userModel from "../common/userModel";


export const signup=(req,res)=>{
    userModel.create(req.body).then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })
}

export const login=(req,res)=>{
    userModel.findOne({email_id:req.body.email_id,mobile_no:req.body.mobile_no})
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })
}