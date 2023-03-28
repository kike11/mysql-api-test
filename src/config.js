import {config as dotenv} from "dotenv";

dotenv();
 export const PORT = process.env.PORT || 3000;
export const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
 
  }

  // export const config2 = {
  // host: process.env.DB_HOST2,
  // user: process.env.DB_USER2,
  // password: process.env.DB_PASSWORD2,
  // database: process.env.DB_NAME2,
  
  // }