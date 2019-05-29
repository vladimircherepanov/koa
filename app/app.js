import Koa from 'koa';
const app = new Koa();
app.use(async ctx => {
    ctx.body = '<h1>WOWWAN THE BEST</h1>';
});
export default app;