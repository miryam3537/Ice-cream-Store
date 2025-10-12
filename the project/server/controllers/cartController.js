const Cart = require("../models/Cart");
const Products = require("../models/Products");
//const stepSchema = require("../Schema/tescSchema");

const getAllCart = async (req, res) => {
    const userId = req.user._id
    const find = await Cart.find({ userId: userId }).populate("productId");
    res.json(find)
}
const addCart = async (req, res) => {
    const { productId } = req.body
    const userId = req.user._id
   console.log( req.user);
    console.log(productId);
    console.log(userId);
    const product = await Cart.create({
        userId: userId,
        productId: productId
    });
    res.json(product)
}

// const updateCart = async (req, res) => {
//     const { id } = req.params
//     const { productId } = req.body
//     const cart = await Cart.findById(id)
//     cart.productId=productId,
//     await cart.save()
//     res.send("upddet complete")
// }
// // 
const deleteCart = async (req, res) => {
    const { id } = req.params
    const deletprodincart = await Cart.findById(id)
    if (!deletprodincart) {
        res.status(400).send(`productById by ${id} not found`)
    }
    const deleted = await deletprodincart.deleteOne()
    res.json(deleted)
}

module.exports = { getAllCart, addCart, deleteCart }