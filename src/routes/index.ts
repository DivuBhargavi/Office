import express from 'express';
//import userrouter from './curd.route';
 
import languageRoute from './language.routes';
//import anushaRoute from './anusha.route';
 // Adjust the import path as needed


const routes = express.Router();

//routes.use('/',userrouter)
 
routes.use('/', languageRoute)

//routes.use('/', anushaRoute)
 


export default routes;
