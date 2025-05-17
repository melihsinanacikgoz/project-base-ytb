const express = require("express");
const router = express.Router();

router.get("/:id", (req, res, next) => {   // çalışacak olan MAİN END-POİNT "/" 
    //  "/:id" id paramatresi gerekli.
    res.json({
        body : req.body,
        params : req.params,
        query : req.query,
        headers : req.headers
    });
})

module.exports = router;