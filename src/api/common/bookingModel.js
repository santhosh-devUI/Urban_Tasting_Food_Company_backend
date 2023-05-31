import mongoose from "mongoose"

const bookingSchema=new mongoose.Schema({
    user_id:{
        type:String
    },
    branch_id:{
        type:String
    },
    booking_date:{
        type:String
    },
    lunch_status:{
        type:Number
    },
    dinner_status:{
        type:Number
    },
    slot:{
        type:String
    },
    booked_by:{
        type:String
    },
    status:{
        type:Number,
        default:0
    }
},{
  timestamps:true  
})

const bookingModel=mongoose.model('bookings',bookingSchema)

export default bookingModel