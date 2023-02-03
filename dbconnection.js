var mongoose = require("mongoose")

const dburl = "mongodb://127.0.0.1/demoappdb"

const proddburl = "mongodb+srv://ashu_lekhi1:test12345@cluster0.w5ixg.mongodb.net/demoappdb"

mongoose.connect(proddburl).then(()=>{
    console.log("Database connection")
}).catch((error)=>{
    console.log("Error Connecting to Database", error)
})

