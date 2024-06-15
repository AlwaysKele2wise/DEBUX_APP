const express = require("express");
require("dotenv").config();

const { PORT } = require("./config/envConfig");



// const PORT = process.env.PORT || 9000
const app = express()



app.listen(PORT, () => {
   console.log("Debux app listening on port:" + PORT)

});
