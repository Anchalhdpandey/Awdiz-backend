import { Router } from "express";
import {
  Login,
  Register,
  validateToken,
} from "../controllers/auth.controllers.js";
import { authenticateToken } from "../../Day-15/middleware/authenticateToken.js";

const router = Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/validate-token", authenticateToken, validateToken);

export default router;
