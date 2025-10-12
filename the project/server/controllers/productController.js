const Products = require("../models/Products");
//const stepSchema = require("../Schema/tescSchema");

const getAllproducts = async (req, res) => {
    const find = await Products.find().lean()
    res.json(find)
}

const addProduct = async (req, res) => {
    const { p_name,price,score,status,active,image} = req.body
    const product = await Products.create({
        p_name,
        price,
        score,
        status,
        active,
        image
    });
    res.json(product)
}

const updateProduct = async (req, res) => {
    const { id } = req.params
    const {  p_name,price,score,status,active,image } = req.body
    const product = await Products.findById(id)
    product.p_name=p_name,
    product.price=price,
    product.score=score,
    product.status=status,
    product.active=active
    product.image=image
    const update = await product.save()
    res.send("upddet complete")
}
// 
const deleteProduct= async (req,res)=>{
    const {id}=req.params
    const deletprod = await Products.findById(id)
    if(!deletprod){
        res.status(400).send(`productById by ${id} not found`)
    }
    const deleted= await deletprod.deleteOne()
    res.json(deleted)
}
const getById = async (req, res) => {
    const { id } = req.params
    const product = await Products.findById(id)
    if (!product)
        return res.send('product with id ')
    res.json(product)
}
// const updatProductComlete = async (req, res) => {
//     const { id } = req.params
//     const product = await Products.findById(id)
//     await product.save()
//     res.send("upddet complete")
// }




module.exports = { getAllproducts,addProduct, updateProduct, deleteProduct,getById  }