 const partnerRoute = require('./routes/partnerRoute');
 const seatClassRoute = require('./routes/seatClassRoute');
 const express = require("express");
 const app = express();
 const body_parser = require('body-parser');
 const cors = require('cors');
 const dbOperations = require('./controllers/partnerController');

 app.use(body_parser.json());
 app.use(body_parser.urlencoded({ extended: true }));//dùng khi cần post dữ liệu dạng json
 app.use(cors());
 app.use("/api/partner", partnerRoute);
 const PORT = process.env.PORT || 3001;
 app.listen(PORT, () => {
   console.log(`Server is flying on port ${PORT}.`);
 });

