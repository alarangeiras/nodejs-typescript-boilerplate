import { Router, Request, Response } from 'express';
import homeService, { HomeService } from '../services/home-service';

export class HomeController {

	constructor(
		private _router: Router,
		private _homeService: HomeService) {
		this._init();
	}

	get router(): Router {
		return this._router;
	}

	private _init() {
		this._router.get('/', this.index.bind(this));
	}

	async index(req: Request, res: Response) {
		const response = await this._homeService.all();
		return res.json(response);
	}

}

export default new HomeController(
	Router(),
	homeService
);