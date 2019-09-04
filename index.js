const Koa = require('koa');
const Router = require('koa-router');
const cheerio = require('cheerio');
const zlib = require('zlib');
const iconv = require('iconv-lite');
const http = require('http')
const fs = require('fs');
const {greenFmt, green, purple} = require('color7log');

const app = new Koa();
const router = new Router();

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
    // ctx.response.body = ['主页', '第二级菜单', '三级菜单'];

    ctx.response.body = 2222222
});


var url = 'http://kaijiang.500.com/shtml/ssq/03001.shtml'

// 拿到源码，调用方法进行解析及输出
http.get(url, function(res) {
    var html = ''
    var arr = [];
    var chunks;
    res.on('data', function(data) {
        arr.push(data);
    })

    res.on('end', function() {
        chunks = Buffer.concat(arr);
        chunks = zlib.unzipSync(chunks)
        var body = iconv.decode(chunks, 'gbk');

        var cheerio = require('cheerio'),
        $ = cheerio.load(body);
        let content = $(".iSelectList a")
        let params = []
        for (let i = 0; i < content.length; i++) {
            params.push($(content[i]).html())
        }
        let nums = $(".ball_box01 li")
        for (let i = 0; i < nums.length; i++) {
            green($(nums[i]).html())
        }
        // greenFmt(content.length, '-')
        fs.writeFile("./data.txt", params.join(','), function(){
            console.log("完成")
        });
        // var courseData = filterChapters(body)
        // printCourseData(courseData)
    })
}).on('error', function() {
    console.log('获取数据出错！')
})

app.use(router.routes())

app.listen(3000);
green('服务已运行，端口：3000')
// purple('服务已运行，端口：3000')
