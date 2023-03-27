import { Router } from "express";
import {deleteGift,getGift,getGiftCount,getGifts,saveGift,updateGift} from "../controllers/gifts.js"


const router = Router()
import { verifySignup } from "../middlewares/index.js";

router.get('/gifts',getGifts)

router.get('/gifts/count',getGiftCount)

router.get('/gift/:id',getGift)

router.post('/gifts',saveGift)

router.delete('/gifts/:id',deleteGift)

router.put('/gifts/:id', updateGift)
export default router