'use strict';

/**
 * Created by trzmiel007 on 12.04.2016.
 */
window.startpoint = function startpoint(config) {
	var ipc = config.ipc;
	var __dirname = config.dirname;
	var AudioPlay = require('./audioPlay.js');

	var soundButtons = document.querySelectorAll('.button-sound');

	for (var i = 0; i < soundButtons.length; ++i) {
		var soundButton = soundButtons[i];
		var soundName = soundButton.dataset.sound;

		addListener(soundButton, soundName);
	}

	function addListener(el, sn) {
		el.querySelector('span').style.backgroundImage = 'url("img/' + sn + '.png")';
		var audio = new AudioPlay(__dirname + '/sounds/' + sn + '.wav');//new Audio(__dirname + '/sounds/'+sn+'.wav');
		el.addEventListener('click', ()=> {
			audio.playPause();
		});
	}

	var close = document.querySelector('.close');

	close.addEventListener('click', ()=> {
		ipc.send('close-main-window');
	});

	ipc.on('global-shortcut', (ev, arg) => {
		var event = new MouseEvent('click');
		soundButtons[arg].dispatchEvent(event);
	});
    
	setTimeout(()=> {
		let myNotification = new Notification('Title', {
			body: 'Lorem Ipsum Dolor Sit Amet'
		});

		myNotification.onclick = function () {
			console.log('Notification clicked');
			new AudioPlay(__dirname + '/sounds/money.wav', true);
		}
	}, 4096);
};
start();