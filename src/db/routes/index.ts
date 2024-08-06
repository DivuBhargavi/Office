
import express from 'express';
import employeeRouter from '../routes/routes';
const routes = express.Router();
 
routes.use('/', employeeRouter)

export default routes;


