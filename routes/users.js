    const express = require("express");
    const router = express.Router();
    const usersController = require("../controller/users.js");
   
    router.post("/register", usersController.userReg);
    


    
    module.exports = router;