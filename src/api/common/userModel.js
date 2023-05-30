import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
	emp_name:{
        type:String
    },
    email_id:{
        type:String
    },
    mobile_no:{
        type:String
    },
    emp_id:{
        type:String
    },
    role:{
        type:String
    },
}, {
		timestamps: true
	});

const userModel = mongoose.model('users', userSchema)

export default userModel