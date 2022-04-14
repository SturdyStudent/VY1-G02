var config = require('../config/db.config');
const sql = require('mssql');

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

module.exports = {
    getLocations: getLocations
}