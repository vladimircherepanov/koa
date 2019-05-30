import {MONGO_URI} from '../config';
import mongooseConnector from './mongoose-connector';

function connectorInit () {
    mongooseConnector(MONGO_URI);
}

export {mongooseConnector,}

export default connectorInit;