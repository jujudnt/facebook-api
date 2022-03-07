import {Router} from "express";
import * as profileController from "../../../controllers/api/v1/profile.controller.js";

const router2 = Router()

router2.get("/:id/posts",profileController.getListPostById)
router2.get("/:id/profile",profileController.getProfile)
router2.patch("/:id/profile",profileController.updateProfile)
router2.delete("/:id",profileController.deleteUser)


export default router2;