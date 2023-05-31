import userModel from "../common/userModel";
import nodemailer from "nodemailer";


//for send mail

const sendVerifyMail=async(name,email,user_id)=>{
    try{
        const transporter= nodemailer.createTransport({
            host:"smtp.gmail.com",
            port:587,
            secure:false,
            auth:{
                user:'screenplay95@gmail.com',
                pass:'gmxhjiwruwpgchvn'
            }
        })
        const mailOptions={
            from:"screenplay95@gmail.com",
            to:email,
            subject:"For Verify Your Account",
            html:`<p> Hello ${name}, please click here to
             <a href="http://localhost:4200/verify?id=${user_id}" target="_self">Verify</a> 
             Your Account </p>`
        }
        transporter.sendMail(mailOptions,function(err,info){
            if(err){
                console.log(err)
            }else{
                console.log(info.response)
            }
        })
    }catch(err){
        console.log(err)
    }
}

export const signup=(req,res)=>{
    userModel.create(req.body).then((result)=>{
         res.send(result)
        sendVerifyMail(req.body.emp_name,req.body.email_id,result._id);
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

export const verifyEmail=async(req,res)=>{
    try{
        const updatedInfo=await userModel.updateOne({_id:req.query.id},{$set:{is_Verified:true}})
      res.send(updatedInfo)
    }catch(err){
        console.log(err);
    }
}