const express = require("express");
const router = express.Router();
const db = require("../queries");

/*  POST req for new codefile to server
    REQUIRES:
    RETURN: row from db
*/
router.post("/create", (req, res) => {
    console.log(req.body);
    db.createCode(req, res);
});

router
    .route("/:id")
    .get((req, res) => {
        /*  GET req for codefile from frontend
        REQUIRES:
        RETURN: row from db
        */
        res.send("Item ID: ${req.param.id}");
    })
    .put((req, res) => {
        /*  PUT req for codefile from frontend
        REQUIRES:
        RETURN: row from db
        */
        res.send("Update item ID: ${req.param.id}");
    })
    .delete((req, res) => {
        /*  DELETE req for codefile from frontend
        REQUIRES:
        RETURN: boolean (success/fail)
        */
        res.send("Delete item ID: ${req.param.id}");
    });

module.exports = router;
