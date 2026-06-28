import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";


const authRouter = Router();

// Post /api/auth/register 
authRouter.post("/register", authController.register);


// Get .api/auth/getme
authRouter.get("/getme", authController.getme);

export default authRouter;