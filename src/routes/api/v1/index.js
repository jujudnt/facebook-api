import {Router} from "express";
import authentification from "./user.route";
import user from "./profile.route";
import posts from "./post.route";
import jwtMiddleware from '../../../middlewares/jwt.middleware';

const router = Router()

    router.use("/authentification",authentification)
    router.use("/users", jwtMiddleware({ secret: 'SECRET' }), user)
    router.use("/posts",  jwtMiddleware({ secret: 'SECRET' }), posts)

export default router;