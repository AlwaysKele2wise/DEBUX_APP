    const express = require("express");
    const router = express.Router();
    const usersController = require("../controller/users.js");
    const foodMenuController = require("../controller/foodMenu.js")

   
    router.post("/register", usersController.userReg);
    router.post("/access", usersController.logIn);
    router.get('/menu', foodMenuController.createMenuItem);
    router.get('/gen', foodMenuController.getMenuItems);


    
    module.exports = router;