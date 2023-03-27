import {config as dotenv} from "dotenv";

dotenv();

export const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  }

  export const config2 = {
  host: process.env.DB_HOST2,
  user: process.env.DB_USER2,
  password: process.env.DB_PASSWORD2,
  database: process.env.DB_NAME2,
  
  }