import mysql from "mysql2/promise";
import { config } from "./config.js";

export const conn = async () => {  
  return await mysql.createConnection(config)

}
// export const conn2 = async () => {  
//   return await mysql.createConnection(config2)

// }