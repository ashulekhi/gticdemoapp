const bodyParser = require("body-parser")
const express = require("express")
const cors = require("cors")
const Port = process.env.PORT || 7000
const path = require("path")
require("./dbconnection")

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use("/api/report", require("./report"))
app.use(express.static(path.resolve(__dirname+"/build")))

app.get("/",(req,res)=>{
    console.log("........", req.ip)
    res.sendFile(path.resolve(__dirname+"/build/index.html"))
})

app.listen(Port,()=>{
    console.log(`Server is listening on ${Port}`)
})