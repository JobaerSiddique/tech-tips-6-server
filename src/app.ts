import express from 'express';
import router from './app/routes';
import globalErrorHandler from './app/middleware/globalHandlerError';
import notFound from './app/middleware/notFound';
import cors from 'cors'
import cookieParser from "cookie-parser"
const app = express()



app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin:"http://localhost:3000",
  credentials:true
}))




app.get('/', (req, res) => {
    res.send('Hurry Tech-Tips server is Started')
  })



app.use('/api/v1', router)


// use route
app.use(globalErrorHandler)

  // not found route
  app.use(notFound)



export default app;