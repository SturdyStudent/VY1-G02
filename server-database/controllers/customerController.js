var config = require('../config/db.config');
const sql = require('mssql');

//dang nhap user
/*async function loginCustomer(customer){
    try{
        let pool = await sql.connect(config);
        let partnerInfo = await pool.request()
            .input('TenDangNhap', sql.VarChar(20), customer.username)
            .input('MatKhau', sql.VarChar(20), customer.password)
            .query("SELECT * FROM HangBay WHERE TenDangNhap = @TenDangNhap AND MatKhau = @MatKhau");
        return partnerInfo.recordsets;
    }
    catch(err){
        console.log(err);
    }
}*/

//them khach hang
async function addUser(user){
    try{
        let pool = await sql.connect(config);
        let userInfo = await pool.request()
            .input('Ho', sql.NVarChar, user.Ho)
            .input('TenDemVaTen', sql.NVarChar, user.TenDemVaTen)
            .input('SoDienThoai', sql.VarChar, user.SoDienThoai)
            .input('Email', sql.VarChar, user.Email)
            .input('NgaySinh', sql.DateTime, user.NgaySinh)
            .execute('dbo.spNguoiDung_addUser'); //tên của procedure 
        return userInfo.recordsets;
    }
    catch(err){
        console.log(err);
    }
}
module.exports = {
    addUser: addUser
}