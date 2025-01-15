//ไฟล์ที่เขียนการควบคุมการทำงานกับตารางในฐานข้อมูล
//เช่น insert, update, delete, select
//ไฟล์นี้ทำงานกับ travel_tb

const Traveller = require("./../models/travel.model.js")

//fuction insert data to travel_tb ====================================================
exports.createTravel = async (req, res) =>{
    try{
        const result = await Traveller.create(req.body);
        res.status(201).json({
            message:"Travel created successfully",
            data: result
        });
    }   catch (error){
        res.status(500).json({
            message: error.message
        });
    }
};

//func get all travel in travel_tb ====================================================
exports.getAllTravel = async (req, res) => {
    try{
        const result = await Travel.findAll({
            where: {
                travellerId: req.params.travellerId
            }
        });
        if (result){
            res.status(200).json({
                message: "Travel get successfully",
                data: result
            })
        } else {
            res.status(404).json({
                message: "Travel get failed",
                data: result
            })
        }
    }   catch (error){
        res.status(500).json({
            message: error.message
        });
    }
}

//func edit travel in travel_tb ====================================================
exports.editTravel = async (req, res) => {
    try{
        const result = await Traveller.update(req.body, {
            where: {
                travelId: req.params.travelId
            }
        });
        res.status(200).json({
            message: "Travel updated successfully",
            data: result
        });
    }   catch (error){
        res.status(500).json({
            message: error.message
        });
    }
}

//func delete travel in travel_tb ====================================================

/*************  ✨ Codeium Command ⭐  *************/
exports.deleteTravel = async (req, res) => {
    try{
        const result = await Traveller.destroy({
            where: {
                travelId: req.params.travelId
            }
        });
        res.status(200).json({
            message: "Travel deeleted successfully",
            data: result
        });
    }   catch (error){
        res.status(500).json({
            message: error.message
        });
    }
}