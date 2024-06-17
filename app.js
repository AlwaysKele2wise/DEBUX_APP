   const express = require("express");
   require("dotenv").config();
   const { notFound, errorHandler } = require("./middlewares/strikas");
   const { PORT } = require("./config/envConfig");
   const app = express()



   
   require("./act/routes")(app)
   require("./act/db")(app)
   


   

   //Error Middlewares
   app.use(notFound);
   app.use(errorHandler);

   //server
   app.listen(PORT, () => {
      console.log("Debux app listening on port:" + PORT)

   });
