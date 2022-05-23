const customerController = require('../controllers/customerController');
const express = require("express");

const route = express.Router();

route.post("/getUsers", (req, res)=>{
    let order = {...req.body}

    customerController.addUser(order).then(result =>{
        res.status(201).send(order);
    })
})
module.exports = route;