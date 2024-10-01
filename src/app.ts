import express from 'express';
import router from './app/routes';
import globalErrorHandler from './app/middleware/globalHandlerError';
import notFound from './app/middleware/notFound';

const app = express()


app.get('/', (req, res) => {
    res.send('Hurry Tech-Tips server is Started')
  })



app.use('/api/v1', router)


// use route
app.use(globalErrorHandler)

  // not found route
  app.use(notFound)



export default app;