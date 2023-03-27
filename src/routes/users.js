import { Router } from "express";
import { getUsers, getUser } from "../controllers/users.js";

const router = Router();

/**
 * @swagger
 * tags:
 *    name: Users
 *    description: Users Endpoint
 */
router.get('/users',getUsers)

router.get('/users/:rfc.:psw',getUser)



export default router