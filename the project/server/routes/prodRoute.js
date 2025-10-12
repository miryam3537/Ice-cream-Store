const express = require("express")
//לבדוק איפה לשים
const verifyJWT = require("../middleware/verifyJWT")
const router = express.Router()
//const Product = require("../models/Products");

const prodController=require("../controllers/productController")
//  router.use(verifyJWT)
router.get("/", prodController.getAllproducts)
router.post("/",prodController.addProduct)
router.get("/:id", prodController.getById)
//router.put("/", prodController.updatProduct)
router.delete("/:id", prodController.deleteProduct)
router.put("/:id", prodController.updateProduct)

module.exports = router
