import userModel from "../common/userModel";
import nodemailer from "nodemailer";
import bookingModel from "../common/bookingModel";
import branchModel from "../common/branchesModel";
import slotModel from "../common/slotsSchema";




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

const sendEmailForCredentials=async(name,email,mobile)=>{
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
            subject:"Urban Tasting Credentials",
            html:`<p> Hello ${name}, <br> Your Credentials for urban tasting food company is: <br> 
            <b>Email_id:</b> ${email}<br><b>Mobile_no:</b> ${mobile}

            </p>`
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
    userModel.findOne({"email_id":req.body.email_id,"mobile_no":req.body.mobile_no}).populate('branch')
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })
}

export const getProfile=(req,res)=>{
    userModel.findById(req.params.id).populate('branch')
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
      console.log(updatedInfo, "update",res,"res")
    }catch(err){
        console.log(err);
    }
}
 export const updateProfile=(req,res)=>{
    userModel.findByIdAndUpdate(req.params.id,req.body,{new:true}).populate('branch')
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })
 }
export const startBooking=(req,res)=>{
bookingModel.create(req.body)
.then((result)=>{
    res.send(result)
})
.catch((err)=>{
    res.send(err)
})
}

export const viewUserBookings=(req,res)=>{
    bookingModel.find({"user_id":req.query.user_id}).populate('user_id branch_id')
    .then((result)=>{
        res.send(result)
       
    })
    .catch((err)=>{
        res.send(err)
    })
}

export const updateBooking=(req,res)=>{
    bookingModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })
    }

export const allBranches=(req,res)=>{
    branchModel.find({"status":"Active"}).then((result)=>{
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
export const viewSlotsByType=(req,res)=>{
    slotModel.find({'branch':req.body.branch,"type":req.body.type, 'status':'Yes'}).then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })
}

export const forgotPassword=(req,res)=>{
    userModel.findOne({"email_id":req.query.email_id}).then((result)=>{     
          res.send(result);
          sendEmailForCredentials(result.emp_name,result.email_id,result.mobile_no)
    })
    .catch((err)=>{
        res.send(err)
    })
}


export const updateSlotsCount=(req,res)=>{
    slotModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((result)=>{
        res.send({error:false,data:result})
    })
    .catch((err)=>{
        res.send({error:true, code:err})
    })
}

export const showMyBranchSlots=(req,res)=>{
    slotModel.find({'branch':req.query.branch,'status':'Yes'})
    .then((result)=>{
        res.send({error:false,data:result})
    })
    .catch((err)=>{
        res.send({error:false,code:err})
    })
} 

export const viewAllBookings=(req,res)=>{
    bookingModel.find({'branch_id':req.query.branch_id})
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })
}

export const showAllSlots=(req,res)=>{
    slotModel.find({'status':'Yes'})
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })
}