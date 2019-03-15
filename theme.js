const color = {
    black: '\x1B[30m%s\x1B[39m',
    red: '\x1B[31m%s\x1B[39m',
    green: '\x1B[32m%s\x1B[39m',
    yellow: '\x1B[33m%s\x1B[39m',
    blue: '\x1B[34m%s\x1B[39m',
    purple: '\x1B[35m%s\x1B[39m',
    cyan: '\x1B[36m%s\x1B[39m',
    white: '\x1B[37m%s\x1B[39m',
    gray: '\x1B[90m%s\x1B[39m'
};
let keys = Object.keys(color);
const log = {};
for (let k of keys) {
    log[k] = (txt) => console.log(color[k], txt);
}

module.exports = log;
