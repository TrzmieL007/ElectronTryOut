'use strict';
var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
//var app = require('app');
//var BrowserWindow = require('browser-window');
var ipc = electron.ipcMain;
var globalShortcut = require('global-shortcut');

var mainWindow = null;

/*
app.on('window-all-closed',()=>{
	if(process.platform != 'darwin'){
		app.quit();
	}
});
*/

app.on('ready', ()=>{
	mainWindow = new BrowserWindow({
		height: 700,
		width: 368,
		resizable: false,
		frame: false
	});
	mainWindow.loadURL('file://'+__dirname+'/app/index.html');
	mainWindow.webContents.openDevTools();
	mainWindow.on('closed',()=>{
		mainWindow = null;
	});
	globalShortcut.register('shift+ctrl+1',()=>{
		mainWindow.webContents.send('global-shortcut',0);
	});
	globalShortcut.register('shift+ctrl+2',()=>{
		mainWindow.webContents.send('global-shortcut',1);
	});
	globalShortcut.register('shift+ctrl+3',()=>{
		mainWindow.webContents.send('global-shortcut',2);
	});
	globalShortcut.register('shift+ctrl+4',()=>{
		mainWindow.webContents.send('global-shortcut',3);
	});
});


ipc.on('close-main-window', ()=>{
	app.quit();
});