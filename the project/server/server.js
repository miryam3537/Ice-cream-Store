require("dotenv").config()
const express = require("express")
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const connectDB = require("./config/dbConn")
const { default: mongoose } = require("mongoose")
const PORT = process .env.PORT || 1234
const app = express()
connectDB()
console.log(process.env.NODE_ENV)
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.send("home page")
})
// app.use("/api/users",require("./routes/userRoute"))
app.use("/api/auth",require("./routes/authRoute"))
app.use("/api/product", require("./routes/prodRoute"))
app.use("/api/cart", require("./routes/cartRoute"))


mongoose.connection.once('open' , ()=>{
    console.log('Connected to mongoDB')
    app.listen(PORT,() => console.log(`server running on port ${PORT}`))
})
 