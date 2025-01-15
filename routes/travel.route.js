//ไฟล์นี้ใช้ในการจัดการเส้นทางในการเรียกใช้งาน service / api
//ไฟล์นี้ทำงานกับ travel_tb
const travelCtrl = require("./../controllers/travel.controller.js");

//call express to use router module
const express = require("express");
const router = express.Router();

//ในการกำหนดเส้นทางเป็นไปตามหลักการขอบ REST APT
//GET = ค้นหา ตรวจสอบ ดึง ดู, POST = เพิ่ม, PUT = แก้ไข, DELETE = ลบ
router.post("/", travelCtrl.createTravel);
router.get("/:travellerId", travelCtrl.getAllTravel);
router.put("/:travelId", travelCtrl.editTravel);
router.delete("/:travelId", travelCtrl.deleteTravel);

//export router for call to use
module.exports = router;