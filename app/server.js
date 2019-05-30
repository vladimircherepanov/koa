import app from './app';
import {PORT, MONGO_URI} from './config'
import ENV, {IS_DEV} from './utils/env'
const server = app.listen (PORT, (err) => {
    if (err) console.log(err);
});
export default server;