const bcrypt = require("bcrypt")
const jwt=require("jsonwebtoken")
const User = require("../models/Users")
const login = async(req,res)=>{
    const{username,password}=req.body
    console.log(username, password)
    if(!username || !password){
        return res.status(400).json({message:"all fileds are reqiere"})
    }
    const foundUser= await User.findOne({username:username}).lean()
    if(!foundUser|| !foundUser.active ){
        return res.status(401).json({message:"Unauthurized"})
    }
    const match=await bcrypt.compare(password,foundUser.password)
    if(!match){
        return res.status(401).json({message:"Unauthurized"})
    }
    const userInfo={
        _id : foundUser._id,
        name: foundUser.name,
        username:foundUser.username,
        roles:foundUser.roles,
        email:foundUser.email
    }
   
const accesstoken = jwt.sign(userInfo,process.env.ACCESS_TOKEN_SECRET)
    res.json({accesstoken,userInfo})
}
const register = async(req,res)=>{
    const{username,password,name,email,phone}=req.body
    //validation
    if(!username || !password || !name || !email){
        return res.status(400).json({message:"All fielde are required"})
    }
    //cheke for duplicate
    const duplicateUser = await User.findOne({username:username}).lean()
    if(duplicateUser){
        return res.status(409).json({message:"duplicate user"})
    }
    const hashpassword = await bcrypt.hash(password,10)
    const user= await User.create({username,password:hashpassword,name,email,phone})
    if(!user){
        return res.status(400).json({message:"Bed request"})
    }
    res.json({message:`user ${user.name} created`})
}
module.exports={login,register}