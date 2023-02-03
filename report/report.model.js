const mongoose = require("mongoose")

var ReportSchema = mongoose.Schema({
    patientsname:{type:String,required:true},
    age:{type:String,required:true},
    gender:{type:String,required:true},
    address:{type:String,required:true},
    profession:{type:String,required:true},
    complaints:{type:String,required:true},
    doctorname:{type:String,required:true},
    hospital:{type:String,required:true},
    typeoftest:{type:String,required:true},
    timeoftest:{type:String,required:true},
    analysis:{type:String,required:true},
})

var ReportModel = new mongoose.model("reports", ReportSchema)

module.exports = ReportModel