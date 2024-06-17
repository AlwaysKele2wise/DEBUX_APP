    const mongoose = require("mongoose");
    require("dotenv").config();
    const winston = require("winston");
    const MONGODB_URI = require("../config/envConfig");


    const db = MONGODB_URI 

    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json()
        ),
        transports: [
            new winston.transports.File({ filename: 'inbox.log' })
        ]
    });



    mongoose.set('strictQuery', false);


    module.exports = function() { 
    mongoose.connect(process.env.MONGODB_URI)
    .then(() => logger.info ("DebuxDB connection...."));
    }
