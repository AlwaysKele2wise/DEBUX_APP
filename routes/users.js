const express = require("express");
const router = express.router();



router.post('/test',  (req, res) => {
    console.log("testing in progress...")
});


module.exports = router;