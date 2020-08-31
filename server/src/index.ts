import logger from './express-server/app/logger';
import App from './express-server/app/App';

const port = process.env.PORT || 9999;
const app = new App(+(port), logger);
app.listen();
