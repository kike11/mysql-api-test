import express, {json} from 'express'
import cors from 'cors'
import morgan from "morgan";
 import swaggerUi from 'swagger-ui-express'
 import swaggerJSDoc from 'swagger-jsdoc';
 import { options } from "./swaggeroptions.js";
 const specs = swaggerJSDoc(options)

import userRoutes from "./routes/users.js"
import giftsRoutes from "./routes/gifts.js"

const  app = express();



app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(userRoutes)
app.use(giftsRoutes)

 app.use('/docs', swaggerUi.serve,swaggerUi.setup(specs))
export default app;