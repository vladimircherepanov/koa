import app from './app';
import {PORT, MONGO_URI} from './config'
import ENV, {IS_DEV} from './utils/env'
const server = app.listen (PORT, (err) => {
    if (err) console.log(err);
    console.log('Server running on port ', PORT);
    console.log(ENV);
    console.log(IS_DEV);
});
export default server;