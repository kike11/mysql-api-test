import { conn  } from "../database.js";
import jwt from "jsonwebtoken";
import moment from 'moment'

export const getGifts = async (req,res)=> {
  const db2 = await conn();
  
  const [row] = await db2.query("Select * from gifts order by id desc limit 30")
  console.log(row);
   res.json(row);
  
}
export const getGift = async (req,res)=>{
  const db2 =await conn();
  const [row] = await db2.query("Select * from gifts where id =?",[req.params.id]);
  res.json(row);

}
export const deleteGift = async (req,res)=>{
  const db2 =await conn();
  await db2.query('delete from gifts where id=?',[req.params.id]);
  res.sendStatus(204);
}
export const getGiftCount  = async (req,res)=>{
  const db2 =await conn();
  const [row]=await db2.query("Select count(*) from gifts");
  res.json(row);

}
export const updateGift = async (req,res)=>{
  const db2 =await conn();
  await db2.query("UPDATE gifts SET ? where id?",[req.body,req.params.id]);
  res.sendStatus(204);

}
export const saveGift = async (req,res)=>{
  const db2 =await conn();
  console.log(req.body)

  const [results]=await db2.query("INSERT INTO gifts (codeWorker,descriptionGift,nameWorker) values (?,?,?)",[req.body.codeWorker,req.body.descriptionGift,req.body.nameWorker]);

  res.json({
    'id': results.insertId,
      ...req.body
  })

}
