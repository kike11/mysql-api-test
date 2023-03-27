import { conn, conn2 } from "../database.js";
import jwt from "jsonwebtoken";
import moment from 'moment'

export const getGifts = async (req,res)=> {
  const db2 = await conn2();
  
  const [row] = await db2.query("Select * from gifts order by id desc limit 30")
  console.log(row);
   res.json(row);
  
}
export const getGift = async (req,res)=>{
  const db2 =await conn2();

}
export const deleteGift = async (req,res)=>{
  const db2 =await conn2();
  await db2.query('delete from gifts where id=?',[req.params.id]);
  res.sendStatus(204);
}
export const getGiftCount  = async (req,res)=>{
  const db2 =await conn2();

}
export const updateGift = async (req,res)=>{
  const db2 =await conn2();

}
export const saveGift = async (req,res)=>{
  const db2 =await conn2();
  console.log(req.body)

  const [results]=await db2.query("INSERT INTO gifts (codeWorker,descriptionGift,nameWorker) values (?,?,?)",[req.body.codeWorker,req.body.descriptionGift,req.body.nameWorker]);

  res.json({

  })

}
