const exec = require('child_process').exec

// 执行cmd命令的目录
let cmdPath = 'aria2'
// 子进程名称
let workerProcess

// 启动Aria2
function openAria2() {
    // 执行命令行，如果命令不需要路径，或就是项目根目录，则不需要cwd参数：
    workerProcess = exec('aria2c --conf-path=../aria2/aria2.conf', {cwd: cmdPath})

    // 打印正常的后台可执行程序输出
    workerProcess.stdout.on('data', function (data) {
        console.log('open aria2 stdout: ' + data);
    });

    // 打印错误的后台可执行程序输出
    workerProcess.stderr.on('data', function (data) {
        console.log('open aria2 stderr: ' + data);
    });

    // 退出之后的输出
    workerProcess.on('close', function (code) {
        console.log('open aria2 out code：' + code);
    })
}

// 关闭Aria2
function closeAria2() {
    // 执行命令行，如果命令不需要路径，或就是项目根目录，则不需要cwd参数：
    workerProcess = exec('taskkill /f /t /im aria2c.exe', {cwd: cmdPath})

    // 打印正常的后台可执行程序输出
    workerProcess.stdout.on('data', function (data) {
        console.log('close aria2 stdout: ' + data);
    });

    // 打印错误的后台可执行程序输出
    workerProcess.stderr.on('data', function (data) {
        console.log('close aria2 stderr: ' + data);
    });

    // 退出之后的输出
    workerProcess.on('close', function (code) {
        console.log('close aria2 out code：' + code);
    })
}

module.exports = {openAria2, closeAria2}
