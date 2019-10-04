import starWarsRepository, { StarWarsRepository } from "../repositories/star-wars-repository";

export class HomeService {

	constructor(private _starWarsRepository: StarWarsRepository) {}

	all(): Promise<any> {
		return this._starWarsRepository.all();
	}

}

export default new HomeService(starWarsRepository);