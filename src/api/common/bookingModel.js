import mongoose from "mongoose"

const bookingSchema=new mongoose.Schema({
    user_id:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'users'

    },
    branch_id:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'branches'
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
        type:mongoose.SchemaTypes.ObjectId,
        ref:'slots'
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