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
        type:String,
        default:'not available'
    },
    dinner_status:{
        type:String,
        default:'not available'
    },
    slotId:{
        type:String
    },
    slot:{
        type:String
    },
    booked_by:{
        type:String
    },
    readStatus:{
        type:String,
        default:'No'
    },
    status:{
        type:Boolean,
        
    }
},{
  timestamps:true  
})

const bookingModel=mongoose.model('bookings',bookingSchema)

export default bookingModel