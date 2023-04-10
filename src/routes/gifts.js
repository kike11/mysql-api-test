import { Router } from "express";
import {deleteGift,getGift,getGiftCount,getGifts,saveGift,updateGift} from "../controllers/gifts.js"


const router = Router()
import { verifySignup } from "../middlewares/index.js";

/**
 * @swagger
 * tags:
 *  name: Gifts
 *  description: tasks endpoint
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Get all Gifts
 *    tags: [Gifts]
 */
router.get('/gifts',getGifts)
/**
 * @swagger
 * /gifts/count:
 *  get:
 *    summary: Get total Gifts conter
 *    tags: [Gifts]
 */
router.get('/gifts/count',getGiftCount)
/**
 * @swagger
 * /gifts/{id}:
 *  get:
 *    summary: Get  Gift by id
 *    tags: [Gifts]
 */
router.get('/gift/:id',getGift)
/**
 * @swagger
 * /gifts:
 *  post:
 *    summary: save a new gift
 *    tags: [Gifts]
 */
router.post('/gifts',saveGift)
/**
 * @swagger
 * /gifts:
 *  delete:
 *    summary: delete atask by id 
 *    tags: [Gifts]
 */
router.delete('/gifts/:id',deleteGift)
/**
 * @swagger
 * /gifts/{id}:
 *  put:
 *    summary: Update  gift by id
 *    tags: [Gifts]
 */
router.put('/gifts/:id', updateGift)
export default router