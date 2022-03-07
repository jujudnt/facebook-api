import {Router} from "express";
import * as postController from "../../../controllers/api/v1/post.controller.js";

const router2 = Router()

router2.post("/",postController.createPost)
router2.get("/:id",postController.getPost)
router2.get("/",postController.getListPost)
router2.patch("/:id",postController.updatePost)
router2.delete("/:id",postController.deletePost)


export default router2;