    const express = require("express");
    const router = express.Router();
    const usersController = require("../controller/users.js");
    const foodMenuController = require("../controller/foodMenu.js")

   
    router.post("/register", usersController.userReg);
    router.post("/access", usersController.logIn);
   router.post('/menu', foodMenuController.createMenuItems);
   router.get('/gen', foodMenuController.getMenuItems);


    
    module.exports = router;