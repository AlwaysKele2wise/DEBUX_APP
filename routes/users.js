    const express = require("express");
    const router = express.Router();
    const usersController = require("../controller/users.js");
   
    router.post("/register", usersController.userReg);
    router.post("/access", usersController.logIn);
    


    
    module.exports = router;