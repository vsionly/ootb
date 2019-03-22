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
    let tem = ''
    log[k] = (...txt) => {
        if(txt.join('').search('\n') !==-1 ) tem = '\n'
        console.log(color[k], tem + (tem ?' ' : '')+ '> ' + txt.join(' ').replace('\n', '') + '\n');
    }
}
log.custom = (param) => {
    let logTxt = '';
    Object.keys(param).map((v, k) => {
    let tem = ''
        if( k==0 ) {
            if(param[v].search('\n') !==-1 ) tem = '\n'
            logTxt += color[v] + tem + ' > '
        }
        logTxt += color[v] + param[v].replace('\n', '') + ' '
    })
    console.log(logTxt + '\n');
}

module.exports = log;
