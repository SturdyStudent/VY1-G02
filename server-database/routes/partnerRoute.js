const partnerController = require('../controllers/partnerController');
const express = require("express");

const route = express.Router();

//trả về mọi dữ liệu chuyến bay
route.get("/getFlights",(req, res)=>{
    partnerController.getFlights().then(result => {
        res.send(result[0]);
    })
});
route.get("/getFlights/:id", (req, res)=>{
    partnerController.getFlightById(req.params.id).then(result => {
        res.send(result[0]);
    })
})

module.exports = route;