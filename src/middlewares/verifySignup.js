import jwt from "jsonwebtoken";
import { conn } from "../database.js";
export const  verifySignup = async (req, res, next) => {
  const db = await conn();
  const token = req.header["x-access-token"];
  console.log(token);
  if (!token) return res.status(403).json({ message: "No token provided" });
  const decoded = jwt.verify(token, "secret");
  req.userId = decoded.eCodUsuario;
  const [user] = await db.query(
    "select Nombre,Apellidos, Trabajador, RFC, eCodUsuario from ca_usuarios where eCodUsuario = ? ",
    [req.params.eCodUsuario]
  );
  if (!user) return res.status(404).json({ message: "no user found" });
  next();
  return;
};
