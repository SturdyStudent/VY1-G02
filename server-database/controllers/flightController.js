var config = require('../config/db.config');
const sql = require('mssql');

async function getFlights(){
    try{
        let pool = await sql.connect(config);
        let flights = await pool.request().query("SELECT * FROM HanhKhach");
        return flights.recordsets;
    }
    catch(error){
        console.log(error);
    }
}
module.exports = {
    getFlights: getFlights
}