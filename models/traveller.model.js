//ไฟล้ที่ทำงานหรือตรงกับตารางในฐานข้อมูล
//ไฟล์นี้ทำงานกับ traveller_tb

const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db/db");
const sequelize = require("../db/db");

//create model to map with table in database
const Traveller = sequelize.define("traveller_tb", 
{
    travellerId:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        field: "traveller_id"
    },
    travellerFullname: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: "travellerFullname"
    },
    travellerEmail: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: "travellerEmail"
    },
    travellerPassword: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: "travellerPassword"
    },
},
    {
        tableName:"traveller_tb",
        timestamps: false,
        freezeTableName: true
    
    }

);

//export model for call to use
module.exports = Traveller;