//ไฟล้ที่ทำงานหรือตรงกับตารางในฐานข้อมูล
//ไฟล์นี้ทำงานกับ travel_tb

const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db/db");
const sequelize = require("../db/db");

//create model to map with table in database
const Traveller = sequelize.define("travel_tb", {
    
    travelId:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        field: "travelId"
    },
    travelPlace: {
        type: Sequelize.STRING(200),
        allowNull: false,
        field: "travelPlace"
    },
    travelStartDate: {
        type: Sequelize.STRING(30),
        allowNull: false,
        field: "travelStartDate"
    },
    travelEndDate: {
        type: Sequelize.STRING(30),
        allowNull: false,
        field: "travelEndDate"
    },
    travelCostTotal: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        field: "travelCostTotal"
    },
    travellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "travellerId"
    },
},
    {
        tableName:"travel_tb",
        timestamps: false,//ถ้าต้องกรให้ในตารางมีการเก็บวันเวลา ให้เปลี่ยนเป็น true
        freezeTableName: true,
    
    
});

//export model for call to use
module.exports = Traveller;