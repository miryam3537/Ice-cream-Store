const mongoose = require ('mongoose')
const productSchema = new mongoose.Schema({
   
    p_name:{
        type:String,
        required:true,
        lowercase:true,
        uniqe:true,
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
      type:String
    },
    score:{
    type:Number,
    required:true,
    enum:[1,2,3,4,5],
    },
    status:{
        type:String,
        enum:["chalavi", "parve"],
        default:"parve"
    },
    active:{
        type:Boolean,
        default:true
        }
},{
        timestamps:true
    })
    module.exports = mongoose.model("Product",productSchema)