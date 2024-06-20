    const express = require("express")
    const usersRouter = require("../routes/users");
    const {VERSION} = require("../config/envConfig");
    const menusRouter = require("../routes/users")


    module.exports = (app) => {

    app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header(
                "Access-Control-Allow-Headers", 
                "Origin, X-Requested-With, Content-Type, Accept, Authorization"
            );
    
            if (req.method === "OPTIONS") {
                req.header("Access-Control-Allow-Methods", "PUT, GET, PATCH, DELETE");
                return res.status(200).json({});
            }
    
            next();
        }); 

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json({ limit: '100mb' }));


    // Root route handler
    app.get('/', (req, res) => {
    res.send('Welcome to BELLE_FOOD!');
     });

   

    const version = "/api/v1/dx";

    app.use(`${VERSION}/users`, usersRouter);
    app.use(`${version}/menus`, menusRouter);
    

    }