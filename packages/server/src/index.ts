import logger from './app/logger';
import App from './app/App';

const port = process.env.PORT || 9999;
const app = new App(+(port), logger);
app.listen();
