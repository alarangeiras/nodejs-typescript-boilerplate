import axios, { AxiosInstance } from 'axios';
const baseURL = process.env.STAR_WARS_BASEURL;
const axiosProxy = axios.create({
	baseURL
});

export class StarWarsRepository {

	constructor(private _axios: AxiosInstance) {}

	async all(): Promise<any> {
		try {
			const response = await this._axios.get(`/`);
			return Promise.resolve(response.data);

		} catch (e) {
			console.error(e);
			return Promise.resolve(0);

		}

	}

}


export default new StarWarsRepository(axiosProxy);