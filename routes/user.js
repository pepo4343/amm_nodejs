const express = require("express");
const router = express.Router();

const isAuth = require("../middlewares/is-auth")

const userController = require("../controllers/user");

router.get("/auto/:data",isAuth,userController.autoControl);

router.get("/manual/:data",isAuth,userController.manualControl);

router.get("/schedule",isAuth,userController.listSchedule);

router.post("/schedule",isAuth,userController.updateSchedule);

router.post("/registor",userController.addUser);



router.post("/login",userController.login);



module.exports = router;