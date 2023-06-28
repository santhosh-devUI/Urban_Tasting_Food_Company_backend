import mongoose from "mongoose"

const branchSchema=new mongoose.Schema({
    location:{
        type:String
    },
    longitude:{
        type:String
    },
    latitude:{
        type:String
    },
    lunch:{
        type:String
    },
    lunch_slots:{
        type:Number
    },
    dinner:{
        type:String
    },
    dinner_slots:{
        type:Number
    },
    radius:{
        type:String
    },
    status:{
        type:String
    }
},
{
    timestamps:true
})
const branchModel=mongoose.model('branches', branchSchema)

export default branchModel