//File that works with a table in the database
//This file works with travel_tb

const Sequelize = require("sequelize");
const sequelize = require("./../db/db.js");

//create model to map with table in database
const Travel = sequelize.define("travel_tb", {
    
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
module.exports = Travel;