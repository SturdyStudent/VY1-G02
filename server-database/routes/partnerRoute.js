const partnerController = require('../controllers/partnerController');
const express = require("express");
const { append } = require('express/lib/response');

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
route.post("/getFlights", (req, res)=>{
    let order = {...req.body}

    partnerController.addFlight(order).then(result =>{
        res.status(201).send(result);
    })
})
route.put("/getFlights/:id", (req, res)=>{
    let order = {...req.body}

    partnerController.updateFlight(order).then(result =>{
        res.status(202).send(result);
    })
})
route.delete("/getFlights/:id", (req, res)=>{
    partnerController.deleteFlight(req.params.id).then(result =>{
        res.status(202).send(result);
        console.log("something was here");
    })
})
module.exports = route;