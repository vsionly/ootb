## 1、简介
    仅对console.log的输出文字颜色做了一些设置
## 2、使用说明
    npm install color7log
    const {green} = require('color7log')
    const {black, red, green, yellow, blue, purple, cyan, white, gray} = require('color7log') // 本人更喜欢这种 简单
    const theme = require('color7log') // theme.green('这里输入绿色文本')

    black('输入黑色文本')
    red('输入红色文本')
    green('输入绿色文本')
    yellow('输入黄色文本')
    blue('输入蓝色文本')
    purple('输入紫色/酒红色文本')
    cyan('输入蓝绿色文本')
    white('输入白色文本')
    gray('输入灰色文本')
    如果命令窗或者bash工具窗（如git bash）中输入文字乱码，
    请在对应工具的选项的子菜单中 修改text设置为cn utf8
### 1、abstract
    Make some settings only for the output text color of console.log
### 2、instuctment
    npm install color7log
    const {green} = require('color7log') // use one fun
    const {black, red, green, yellow, blue, purple, cyan, white, gray} = require('color7log') // i like this style more
    const theme = require('color7log') // theme.green('this text is green')

    green('this text is green')
    If the input text is garbled in the command window or git bash,
    modify the encoding of the command tool to your own standard encoding.