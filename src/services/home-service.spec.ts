import { HomeService } from './home-service';
import { StarWarsRepository } from '../repositories/star-wars-repository';

const starWarsRepository: StarWarsRepository = Object.assign({
	all() {
		return Promise.resolve([
			{},
			{},
			{},
			{}
		])
	}
});

test('should return 4 elements', async () => {
	const homeService = new HomeService(starWarsRepository);
	const result = await homeService.all();
	expect(result.length).toEqual(4);
});