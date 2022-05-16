const partnerController = require('../controllers/partnerController');
const express = require("express");

const route = express.Router();

//trả về mọi dữ liệu chuyến bay
route.get("/getPartnerFlights/:id", (req, res)=>{
    partnerController.getPartnerFlights(req.params.id).then(result => {
        res.send(result[0]);
    })
})
route.get("/getFlights",(req, res)=>{
    partnerController.getFlights().then(result => {
        res.send(result[0]);
    })
});
route.post("/getFlights/query",(req, res)=>{
    let order = {...req.body}

    partnerController.getFlightBySearchQuery(order).then(result =>{
        res.status(201).send(result);
    })
})
route.get("/getFlights/:id", (req, res)=>{
    partnerController.getFlightById(req.params.id).then(result => {
        res.send(result);
    })
})
route.post("/getFlights", (req, res)=>{
    let order = {...req.body}

    partnerController.addFlight(order).then(result =>{
        res.status(201).send(order);
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
        res.status(202).send(JSON.stringify(result[0][0]));
    })
})
//lấy loại hạng vé
route.get("/getSeatClass", (req, res)=>{
    partnerController.getSeatClass().then(result => {
        res.send(result[0]);
    })
})
route.get("/getSeatClass/:id", (req, res)=>{
    partnerController.getSeatClassById(req.params.id).then(result => {
        res.send(JSON.stringify(result[0][0]));
    })
})
//lấy địa điểm
route.get("/getLocations",(req, res)=>{
    partnerController.getLocations().then(result => {
        res.send(result[0]);
    })
});
route.get("/getPartners", (req, res)=>{
    partnerController.getPartners().then(result=>{
        res.send(result[0]);
    })
})
route.post("/getPartners", (req, res)=>{
    let order = {...req.body}

    partnerController.addPartner(order).then(result =>{
        res.status(201).send(result);
    })
})
route.post("/getPartners/:id", (req, res)=>{
    partnerController.getPartnerNameById(req.params.id).then(result => {
        res.send(JSON.stringify(result[0][0]));
        console.log(JSON.stringify(result[0][0]));
    })
})
route.post("/partner-login", (req, res)=>{
    let order = {...req.body}

    partnerController.loginPartner(order).then(result =>{
        res.status(203).send(result[0][0]);
    })
})
module.exports = route;