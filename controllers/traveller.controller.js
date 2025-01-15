//File that writes control operations for a table in the database
//เช่น insert, update, delete, select
//This file works with traveller_tb\
const Traveller = require("./../models/traveller.model.js")

//fuction insert data to traveller_tb ====================================================
exports.createTraveller = async (req, res) =>{
    try{
        const result = await Traveller.create(req.body);
        res.status(201).json({
            message:"Traveller created successfully",
            data: result
        });
    }   catch (error){
        res.status(500).json({
            message: error.message
        });
    }
};

//func check login in traveller_tb ====================================================
exports.checkLoginTraveller = async (req,res) => {
    try{
        const result = await Traveller.findOne({
            where: {
                travellerEmail: req.params.travellerEmail ,
                travellerPassword: req.params.travellerPassword ,
            }
        });
        if (result){
            res.status(200).json({
                message: "Traveller login succesfully",
                data: result
            })
        } else {
            res.status(404).json({
                message: "Traveller login failed",
                data: result
            })
        }
    }   catch (error){
        res.status(500).json({
            message: error.message
        });
    }

}

//func edit profile user in traveller_tb ====================================================
exports.editTraveller = async (req, res) => {
    try{
        const result = await Traveller.update(req.body, {
            where: {
                travellerId: req.params.travellerId
            }
        });
        res.status(200).json({
            message: "Traveller updated successfully",
            data: result
        });
    }   catch (error){
        res.status(500).json({
            message: error.message
        });
    }
}