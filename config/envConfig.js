require("dotenv").config();


const MONGODB_URI = process.env.MONGODB_URI
const VERSION = process.env.VERSION
const PORT = process.env.PORT || 9000





module.exports = {
    PORT,
    VERSION,
    MONGODB_URI,
}