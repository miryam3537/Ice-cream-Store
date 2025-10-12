const express = require("express")
const cartController = require("../controllers/cartController")
const router = express.Router()
const verifyJWT = require("../middleware/verifyJWT")
router.use(verifyJWT)
router.get("/",cartController.getAllCart)
router.post("/",cartController.addCart)
router.delete("/:id",cartController.deleteCart)
module.exports = router