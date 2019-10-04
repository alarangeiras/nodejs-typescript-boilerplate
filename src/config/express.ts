import express from 'express';
import cors from 'cors';
import routeConfig from './router';

const PORT = process.env.PORT;

export default () => {
	const app = express();
	app.use(cors());
	app.use(express.json());
	app.use(express.urlencoded({extended: true}));

	routeConfig(app);

	app.listen(PORT, () => {
		console.log(`the server is running on port ${PORT}`);
	});
}