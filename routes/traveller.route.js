//ไฟล์นี้ใช้ในการจัดการเส้นทางในการเรียกใช้งาน service / api
//ไฟล์นี้ทำงานกับ traveller_tb
const travellerCtrl = require("./../controllers/traveller.controller.js");

//call express to use router module
const express = require("express");
const router = express.Router();

//ในการกำหนดเส้นทางเป็นไปตามหลักการขอบ REST APT
//GET = ค้นหา ตรวจสอบ ดึง ดู, POST = เพิ่ม, PUT = แก้ไข, DELETE = ลบ
router.post("/", travellerCtrl.createTraveller);
router.get("/:travellerEmail/:travellerPassword", travellerCtrl.checkLoginTraveller);
router.put("/:travellerId", travellerCtrl.editTraveller);

//export router for call to use
module.exports = router;