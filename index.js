const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const {green, purple} = require('color7log');
// const {green} = require('./theme.js');
const fs = require('fs');

// 打印请求URL
app.use(async (ctx, next) => {
    console.log(`处理 ${ctx.request.method} ${ctx.request.url} ...`);
    await next();
});
router.get('/', async (ctx, next) => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./index.html');
});

router.get('/getlist', async (ctx, next) => {
    // ctx.status = 200
    ctx.response.body = ['主页', '第二级菜单', '三级菜单'];
});
app.use(router.routes())
// router.get('/', main)
// router.get('/favicon.ico', ico)

app.listen(3000);
green('服务已运行，端口：3000')
// purple('服务已运行，端口：3000')
