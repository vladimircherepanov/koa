import bodyParser from 'koa-bodyparser';
import error from './error';
import logger from 'koa-logger';
import {IS_DEV} from '../utils/env';

export default (app) => {
    if (IS_DEV) {
        app.use(logger());
    }
    app.use(error());
    app.use(bodyParser());
};
