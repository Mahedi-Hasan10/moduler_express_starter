import { Router } from "express";
import { sendOtp } from "./auth.controller";
import { validateSendOtp } from "./auth.validator";

const authRouter: Router = Router();
authRouter.post("/send-otp", validateSendOtp as any, sendOtp as any)

export default authRouter;