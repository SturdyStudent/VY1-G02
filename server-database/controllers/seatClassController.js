var config = require('../config/db.config');
const sql = require('mssql');

async function getSeatClassByFlightId(flightId){//phải chờ chạy xong thì mới vào hàm
    try{
        let pool = await sql.connect(config);
        let seatClass = await pool.request()
            .input('input_parameter', sql.Int, flightId)
            .query("SELECT * FROM LoaiHangVe WHERE MaChuyenBay = @input_parameter");
        return seatClass.recordsets;
    }
    catch(err){
        console.log(err);
    }
}
module.exports = {
    getFlights: getFlights,
}