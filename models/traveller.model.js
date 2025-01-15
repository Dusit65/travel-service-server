//File that works with a table in the database
//This file works with traveller_tb

const Sequelize = require("sequelize");
const sequelize = require("./../db/db.js");

//create model to map with table in database
const Traveller = sequelize.define("traveller_tb", 
{
    travellerId:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        field: "travellerId"
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