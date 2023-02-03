var express = require("express")
var ReportController = require("./report.controller")
var router = express.Router()

router.post("/add", ReportController.addReport)

module.exports = router