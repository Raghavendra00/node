const router = require("express").Router();
const path = require("path");
const userController = require('../controller/userController')

router.get("/", userController.home);

router.get("/about", userController.about);

router.get("/form", userController.form);

router.get("/api", userController.api);

router.post("/savedata", userController.savedata);
router.get('/phone', (req, res) => {
    res.send("I am in phone");
})

module.exports = router;
