// user.routes.js
import { Router } from "express";
import { login, register, validateToken, Logout, addToCart, getCart } from "../controllers/user.controllers.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/validate-token", validateToken);
router.get("/logout", Logout);
router.post("/add-to-cart", addToCart);
router.get("/cart/:userId", getCart);

export default router;
