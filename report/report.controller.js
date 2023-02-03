const ReportModel = require("./report.model")

exports.addReport = function(req,res){
    console.log("Data to be added into database", req.body)
    var data = new ReportModel(req.body)
    data.save().then((result)=>{
        res.send({
            message:"Success"
        })
    }).catch((error)=>{
        console.log("Error in saving to database", error)
        res.status(500).send({
        })
    })
}

