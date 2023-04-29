import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from "url";
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { config } from 'platformsh-config';
import router from './routes/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = config().environmentVariables.PLATFORM_ENVIRONMENT_TYPE == 'development' || config().environmentVariables.PLATFORM_ENVIRONMENT_TYPE == 'production' ? config().port : 8083;

app.set('trust proxy', 1); // trust first proxy
app.set('port', port);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/dist')));

app.use(router);

// start the server
const server = app.listen(port, () => {
  console.log(`Server started on port ${server.address().port} :)`);
});
