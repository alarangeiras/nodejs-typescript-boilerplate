import { Application } from "express";
import homeController from '../controllers/home-controller';

export default (app: Application) => {
	app.use('/', homeController.router);
}