const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    res.json({
        message: "API :DDD"
    })
});

module.exports = router;