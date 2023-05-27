const router = require("express").Router();



router.get("/", async(req, res, next)=> {
    try {
        res.status(200).json("👉🏿🤓👈🏿")
    } catch (error) {
        res.status(500).json(error)
    }
});




module.exports = router;