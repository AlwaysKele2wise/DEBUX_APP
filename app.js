   const express = require("express");
   require("dotenv").config();
   const { notFound, errorHandler } = require("./middlewares/strikas");
   const { PORT } = require("./config/envConfig");
   const app = express()
   const router = express.Router();



   
   require("./act/routes")(app)
   require("./act/db")(app)
   
    
     // Root route handler
     router.get('/', (req, res) => {
      res.send('Welcome to DEBUX_APP!');
     });

   

   //Error Middlewares
   app.use(notFound);
   app.use(errorHandler);

   //server
   app.listen(PORT, () => {
      console.log("Debux app listening on port:" + PORT)

   });
