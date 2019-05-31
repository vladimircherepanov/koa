import Koa from 'koa';
import connectorInit from './connectors';
import InitHandlers from './handlers'

connectorInit();
const app = new Koa();
InitHandlers(app);


app.use(async ctx => {
    ctx.body = '<h1>WOWWAN THE BEST</h1>';
});
export default app;