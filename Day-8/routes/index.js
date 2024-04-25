import { Router } from "express";
import UserRoutes from "./user.routes.js";

const router = Router();

router.use("/user", UserRoutes);
// router.use("/payment", PaymentRoutes);

export default router;