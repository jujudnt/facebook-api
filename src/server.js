import express from 'express';
import router2 from './routes/index.js';
import catchError from './middlewares/catchError.middleware.js';
export function launch({ host, protocol, port }) {
  const application = express();

  application.use(express.json());
  application.use(router2)
  application.use(catchError)
  application.listen(
    port,
    () => console.log(`Server started at ${protocol}://${host}:${port}`),
  );
}