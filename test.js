var cp = require('child_process');
try {
    const shell = require('shelljs');
}
catch (e) {
    if (e instanceof Error && e.code === "MODULE_NOT_FOUND"){
        console.log("----------------------");
        console.log("Installing dependencies");
        cp.exec('npm i node-cron shelljs json-format', function(err, stdout, stderr) {
            // handle err, stdout, stderr
        });
    }else{
        throw e;
    }
}