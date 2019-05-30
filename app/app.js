import Koa from 'koa';
import connectorInit from './connectors';

connectorInit();
const app = new Koa();

app.use(async ctx => {
    ctx.body = '<h1>WOWWAN THE BEST</h1>';
});
export default app;