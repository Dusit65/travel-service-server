//This file is used to manage routing for service / API calls
//This file works with travel_tb
const travelCtrl = require("./../controllers/travel.controller.js");

//call express to use router module
const express = require("express");
const router = express.Router();

//Routing is based on RESTful API principles
//GET = ค้นหา ตรวจสอบ ดึง ดู, POST = เพิ่ม, PUT = แก้ไข, DELETE = ลบ
router.post("/", travelCtrl.createTravel);
router.get("/:travellerId", travelCtrl.getAllTravel);
router.put("/:travelId", travelCtrl.editTravel);
router.delete("/:travelId", travelCtrl.deleteTravel);

//export router for call to use
module.exports = router;