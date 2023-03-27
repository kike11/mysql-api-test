import { conn } from "../database.js";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
  const db = await conn();
  const [row] = await db.query(
    "select Nombre,Apellidos, Trabajador, RFC  from ca_usuarios limit 10"
  );
  // console.log(row[0]);
  res.json(row);
};

export const getUser = async (req, res) => {
  const db = await conn();
     
  const psw = btoa(req.params.psw);
  // console.log(req.params.rfc,psw)
  const [row] = await db.query("select Nombre,Apellidos, Trabajador, RFC, eCodUsuario from ca_usuarios where RFC = ? and password = ? ",
    [req.params.rfc, psw]
  );
  console.log(row[0]);
  if (!row[0])  return res.status(404).json({message:'No user found: No existe un usuario con los datos proporcionados'})
 
  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 7,
      eCodUsuario: row[0].eCodUsuario,
    },
    "secret"
  );
  console.log(token);
  const user = {
    Nombre: row[0].Nombre,
    Apellidos: row[0].Apellidos,
    userToken: token,
  };
  res.json(user);
};
