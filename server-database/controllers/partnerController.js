var config = require('../config/db.config');
const sql = require('mssql');

async function getPartnerFlights(partnerId){//phải chờ chạy xong thì mới vào hàm
    try{
        let pool = await sql.connect(config);
        let flights = await pool.request()
            .input('MaHangBay', sql.VarChar(10), partnerId)
            .query("SELECT * FROM ChuyenBay WHERE HangBay = @MaHangBay");
        return flights.recordsets;
    }
    catch(error){
        console.log(error);
    }
}
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
            .input('PhoThong', sql.Int, flightInfo.PhoThong)
            .input('UuDaiPhoThong', sql.NText, flightInfo.UuDaiPhoThong)
            .input('SoVePhoThong', sql.SmallInt, flightInfo.SoVePhoThong)
            .input('PhoThongDacBiet', sql.Int, flightInfo.PhoThongDacBiet)
            .input('UuDaiDacBiet', sql.NText, flightInfo.UuDaiDacBiet)
            .input('SoVeDacBiet', sql.SmallInt, flightInfo.SoVeDacBiet)
            .input('ThuongGia', sql.Int, flightInfo.ThuongGia)
            .input('UuDaiThuongGia', sql.NText, flightInfo.UuDaiThuongGia)
            .input('SoVeThuongGia', sql.SmallInt, flightInfo.SoVeThuongGia)
            .input('HangNhat', sql.Int, flightInfo.HangNhat)
            .input('UuDaiHangNhat', sql.NText, flightInfo.UuDaiHangNhat)
            .input('SoVeHangNhat', sql.SmallInt, flightInfo.SoVeHangNhat)
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
            .input('PhoThong', sql.Int, flightInfo.PhoThong)
            .input('UuDaiPhoThong', sql.NText, flightInfo.UuDaiPhoThong)
            .input('SoVePhoThong', sql.SmallInt, flightInfo.SoVePhoThong)
            .input('PhoThongDacBiet', sql.Int, flightInfo.PhoThongDacBiet)
            .input('UuDaiDacBiet', sql.NText, flightInfo.UuDaiDacBiet)
            .input('SoVeDacBiet', sql.SmallInt, flightInfo.SoVeDacBiet)
            .input('ThuongGia', sql.Int, flightInfo.ThuongGia)
            .input('UuDaiThuongGia', sql.NText, flightInfo.UuDaiThuongGia)
            .input('SoVeThuongGia', sql.SmallInt, flightInfo.SoVeThuongGia)
            .input('HangNhat', sql.Int, flightInfo.HangNhat)
            .input('UuDaiHangNhat', sql.NText, flightInfo.UuDaiHangNhat)
            .input('SoVeHangNhat', sql.SmallInt, flightInfo.SoVeHangNhat)
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
// Quản lí địa điểm                                             
async function getLocations(){//phải chờ chạy xong thì mới vào hàm
    try{
        let pool = await sql.connect(config);
        let locations = await pool.request().query("SELECT * FROM DiaDiem");
        return locations.recordsets;
    }
    catch(error){
        console.log(error);
    }
}
// Quản lí partner
async function getPartners(){//phải chờ chạy xong thì mới vào hàm
    try{
        let pool = await sql.connect(config);
        let partners = await pool.request().query("SELECT * FROM HangBay");
        return partners.recordsets;
    }
    catch(error){
        console.log(error);
    }
}
async function addPartner(partner){
    try{
        let pool = await sql.connect(config);
        let partnerInfo = await pool.request()
            .input('MaHangBay', sql.VarChar, partner.MaHangBay)
            .input('TenHangBay', sql.NVarChar, partner.TenHangBay)
            .input('HinhAnhHangBay', sql.Image,partner.HinhAnhHangBay)
            .input('SoHanhLiXachTay',sql.TinyInt,partner.SoHanhLiXachTay)
            .input('TenDangNhap', sql.VarChar,partner.TenDangNhap)
            .input('MatKhau', sql.VarChar,partner.MatKhau)
            .execute('spHangBay_addPartner '); //tên của procedure 
        return partnerInfo.recordsets;
    }
    catch(err){
        console.log(err);
    }
}
async function loginPartner(partner){
    try{
        let pool = await sql.connect(config);
        let partnerInfo = await pool.request()
            .input('TenDangNhap', sql.VarChar(20), partner.username)
            .input('MatKhau', sql.VarChar(20), partner.password)
            .query("SELECT * FROM HangBay WHERE TenDangNhap = @TenDangNhap AND MatKhau = @MatKhau");
        return partnerInfo.recordsets;
    }
    catch(err){
        console.log(err);
    }
}
// Quản lí loại hạng vé
async function getSeatClassById(flightId){
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
    //Chuyến bay
    getPartnerFlights:getPartnerFlights,
    getFlights: getFlights,
    getFlightById:getFlightById,
    addFlight:addFlight,
    updateFlight:updateFlight,
    deleteFlight:deleteFlight,
    getSeatClassById:getSeatClassById,
    //Địa điểm
    getLocations:getLocations,
    //Partner
    addPartner:addPartner,
    getPartners:getPartners,
    loginPartner:loginPartner
    
}