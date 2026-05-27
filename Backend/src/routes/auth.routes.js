const { Router } = require("express")
const authController = require("../controller/auth.controller")

const router = Router()

router.post("/register", authController.registerUserController)
router.post("/login", authController.loginUserController )
router.get("/logout", authController.logoutUserController)

module.exports = router