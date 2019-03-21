const color = {
    black: '\033[40;30m',
    red: '\033[40;31m',
    green: '\033[40;32m',
    yellow: '\033[40;33m',
    blue: '\033[40;34m',
    purple: '\033[40;35m',
    cyan: '\033[40;36m',
    white: '\033[40;37m',
    gray: '\033[40;90m'
};
let keys = Object.keys(color);
const log = {};
for (let k of keys) {
    log[k] = (...txt) => {
        console.log(color[k], txt.join(' '));
    }
}
log.custom = (conf) => {
    let logTxt = '';
    Object.keys(conf).map(v => {
        logTxt += color[v] + conf[v] + ' '
    })
    console.log(logTxt);
}

module.exports = log;
