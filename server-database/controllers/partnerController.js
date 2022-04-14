var config = require('../config/db.config');
const sql = require('mssql');

async function getFlights(){//phải chờ chạy xong thì mới vào hàm
    try{
        let pool = await sql.connect(config);
        let flights = await pool.request().query("SELECT * FROM ChuyenBay");
        return flights.recordsets;
    }
    catch(error){
        console.log(error);
    }
}
async function getFlightById(flightId){
    try{
        let pool = await sql.connect(config);
        let flight = await pool.request()
            .input('input_parameter', sql.Int, flightId)
            .query("SELECT * FROM ChuyenBay WHERE MaChuyenBay = @input_parameter");
        return flight.recordsets;
    }
    catch(err){
        console.log(err);
    }
}
async function addFlight(flightInfo){
    try{
        let pool = await sql.connect(config);
        let insertFlight = await pool.request()
            .input('MaChuyenBay', sql.Int, flightInfo.MaChuyenBay)
            .input('TenChuyenBay', sql.Binary, flightInfo.TenChuyenBay)
            .execute('ThemChuyenBay'); //tên của procedure 
        return insertFlight.recordsets;
    }
    catch(err){
        console.log(err);
    }
}
module.exports = {
    getFlights: getFlights,
    getFlightById:getFlightById,
    addFlight:addFlight
}