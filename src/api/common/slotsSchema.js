import mongoose from "mongoose"

const slotSchema= new mongoose.Schema({
    slot_name:{
        type:String
    },
    branch:{
        type:String
    },
    type:{
        type:String,
        enum:['Lunch','Dinner']
    },
    from_time:{
        type:String
    },
    to_time:{
        type:String
    },
    count:{
        type:String
    },
    status:{
        type:String
    },
},
{
    timestamps:true
})

const slotModel=mongoose.model('slots',slotSchema)

export default slotModel