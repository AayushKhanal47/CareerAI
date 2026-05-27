const { Router } = require("express")
const authController = require("../controller/auth.controller")
const authMiddleware = require("../middleware/auth.middleware")

const router = Router()

router.post("/register", authController.registerUserController)
router.post("/login", authController.loginUserController)
router.get("/logout", authController.logoutUserController)

// FIXED ROUTE 👇
router.get(
    "/get-me",
    authMiddleware.authUser,
    (req, res) => {
        res.json({
            user: req.user
        })
    }
)

module.exports = router