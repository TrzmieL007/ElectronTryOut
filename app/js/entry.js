/**
 * Created by trzmiel007 on 14.04.2016.
 */


function start(){
    var ipc = require('electron').ipcRenderer;
    startpoint({
        ipc : ipc,
        dirname : __dirname
    });
}