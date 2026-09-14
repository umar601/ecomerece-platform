const userRouter = require("express").Router();
const {
  adminSignUp,
  adminLogin,
  adminLogout,
  getMe,
} = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const limiter = require("../middlewares/limit.middleware");

userRouter.post("/signup", limiter, adminSignUp);

userRouter.post("/login", limiter, adminLogin);

userRouter.get("/logout", authMiddleware, adminLogout);

userRouter.get("/getMe", authMiddleware, getMe);

module.exports = userRouter;
