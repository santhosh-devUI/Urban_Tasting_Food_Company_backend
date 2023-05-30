import adminModel from "./adminModel";


export const login=(req,res)=>{
    adminModel.find({"username":req.body.username,"password":req.body.password})
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })
}