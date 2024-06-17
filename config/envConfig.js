        require("dotenv").config();


        const MONGODB_URI = process.env.MONGODB_URI
        const VERSION = process.env.VERSION
        const PORT = process.env.PORT || 9000
        const PASSMAILER = process.env.PASSMAILER
        const USER = process.env.USER
        const SERVICE = process.env.SERVICE





        module.exports = {
            PORT,
            VERSION,
            MONGODB_URI,
            USER,
            PASSMAILER,
            SERVICE,
        }