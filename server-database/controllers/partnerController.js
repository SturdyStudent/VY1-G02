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
async function updateFlight(flightInfo){
    try{
        let pool = await sql.connect(config);
        let flight = await pool.request()
            .input('flightId', sql.Char, flightInfo.flightId)
            .input('SoHieuChuyenBay', sql.VarChar, flightInfo.SoHieuChuyenBay)
            .input('DiaDiemKhoiHanh',sql.NVarChar, flightInfo.DiaDiemKhoiHanh)
            .input('DiaDiemDen',sql.NVarChar,flightInfo.DiaDiemDen)
            .input('NgayGioKhoiHanh',sql.DateTime,flightInfo.NgayGioKhoiHanh)
            .input('NgayGioDen',sql.DateTime,flightInfo.NgayGioDen)
            .input('TongSoVe',sql.SmallInt,flightInfo.TongSoVe)
            .input('GiaVe',sql.Int, flightInfo.GiaVe)
            .input('SoDoGheNgoi',sql.VarChar, flightInfo.SoDoGheNgoi)
            .input('KhoangCachGhe',sql.TinyInt, flightInfo.KhoangCachGhe)
            .input('LoaiMayBay',sql.NVarChar, flightInfo.LoaiMayBay)
            .input('TrangThai', sql.NVarChar, flightInfo.TrangThai)
            .input('HangBay',sql.NVarChar,flightInfo.HangBay)
            .execute('spChuyenBay_updateFlights');
        return flight.recordsets;
    }
    catch(err){
        console.log(err)
    }
}
async function addFlight(flightInfo){
    try{
        let pool = await sql.connect(config);
        let insertFlight = await pool.request()
            .input('MaChuyenBay', sql.Char, flightInfo.MaChuyenBay)
            .input('SoHieuChuyenBay', sql.VarChar, flightInfo.SoHieuChuyenBay)
            .input('DiaDiemKhoiHanh', sql.NVarChar, flightInfo.DiaDiemKhoiHanh)
            .input('DiaDiemDen', sql.NVarChar,flightInfo.DiaDiemDen)
            .input('NgayGioKhoiHanh',sql.DateTime,flightInfo.NgayGioKhoiHanh)
            .input('NgayGioDen', sql.DateTime,flightInfo.NgayGioDen)
            .input('TongSoVe', sql.SmallInt,flightInfo.TongSoVe)
            .input('GiaVe', sql.Int, flightInfo.GiaVe)
            .input('SoDoGheNgoi',sql.VarChar, flightInfo.SoDoGheNgoi)
            .input('KhoangCachGhe',sql.TinyInt, flightInfo.KhoangCachGhe)
            .input('LoaiMayBay',sql.NVarChar, flightInfo.LoaiMayBay)
            .input('TrangThai', sql.NVarChar, flightInfo.TrangThai)
            .input('HangBay', sql.NVarChar,flightInfo.HangBay)
            .execute('spChuyenBay_addFlights'); //tên của procedure 
        return insertFlight.recordsets;
    }
    catch(err){
        console.log(err);
    }
}
async function deleteFlight(flightId){
    try{
        let pool = await sql.connect(config);
        let deleteFlights = await pool.request()
            .input('input_parameter', sql.Int, flightId)
            .query("delete from ChuyenBay where MaChuyenBay = @input_parameter")
        return deleteFlights.recordsets;
    }
    catch(err){
        console.log(err);
    }
}
module.exports = {
    getFlights: getFlights,
    getFlightById:getFlightById,
    addFlight:addFlight,
    updateFlight:updateFlight,
    deleteFlight:deleteFlight
}