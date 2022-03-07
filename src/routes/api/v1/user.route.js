import {Router} from "express";
import * as userController from "../../../controllers/api/v1/user.controller.js";

const router2 = Router()

router2.post("/register",userController.createUser)
router2.post("/login",userController.loginUser)


export default router2;