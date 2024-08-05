
import express from 'express';
import departmentRouter from '../routes/route';
const routes = express.Router();
 
routes.use('/', departmentRouter)

export default routes;


