 const partnerRoute = require('./routes/partnerRoute');
 const customerRoute = require('./routes/customerRoute');
 const express = require("express");
 const stripe = require("stripe")("sk_test_51L2cr8EIvijdT2SMZl5JTs34A1NKCkzwb0NsMu00Myy6IGeXR5MiYDIzmyNPSqjvilDd2sQyKb5Ors8xTVmlzxB900px7HAarJ");
 const app = express();
 const body_parser = require('body-parser');
 const cors = require('cors');
 const DOMAIN = "http://webchuyenbayg02.com/"

 app.use(body_parser.json());
 app.use(body_parser.urlencoded({ extended: true }));//dùng khi cần post dữ liệu dạng json
 app.use(cors());
 app.use("/api/partner", partnerRoute);
 app.use("/api/customer", customerRoute);
 const PORT = process.env.PORT || 3001;
 app.listen(PORT, () => {
   console.log(`Server is flying on port ${PORT}.`);
 });
 app.post("/api/payment", (req, res) =>{
  const paymentIntent = stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: 'vnd',
    payment_method_types: [
      "card"
    ],
    // Verify your integration in this guide by including this parameter
    metadata: {integration_check: 'accept_a_payment'},
  });
  res.send(JSON.stringify(paymentIntent));
 });