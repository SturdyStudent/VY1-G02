const locationController = require('../controllers/locationController');
const express = require("express");

const route = express.Router();

//trả về mọi dữ liệu chuyến bay
route.get("/",(req, res)=>{
    locationController.getLocations().then(result => {
        res.send(result[0]);
    })
});

module.exports = route;