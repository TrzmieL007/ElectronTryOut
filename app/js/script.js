/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Created by trzmiel007 on 12.04.2016.
	 */
	
	window.startpoint = function startpoint(config) {
		var ipc = config.ipc;
		var __dirname = config.dirname;
		var AudioPlay = __webpack_require__(2);
	
		var soundButtons = document.querySelectorAll('.button-sound');
	
		for (var i = 0; i < soundButtons.length; ++i) {
			var soundButton = soundButtons[i];
			var soundName = soundButton.dataset.sound;
	
			addListener(soundButton, soundName);
		}
	
		function addListener(el, sn) {
			el.querySelector('span').style.backgroundImage = 'url("img/' + sn + '.png")';
			var audio = new AudioPlay(__dirname + '/sounds/' + sn + '.wav'); //new Audio(__dirname + '/sounds/'+sn+'.wav');
			el.addEventListener('click', () => {
				audio.playPause();
			});
		}
	
		var close = document.querySelector('.close');
	
		close.addEventListener('click', () => {
			ipc.send('close-main-window');
		});
	
		ipc.on('global-shortcut', (ev, arg) => {
			var event = new MouseEvent('click');
			soundButtons[arg].dispatchEvent(event);
		});
	
		setTimeout(() => {
			let myNotification = new Notification('Title', {
				body: 'Lorem Ipsum Dolor Sit Amet'
			});
	
			myNotification.onclick = function () {
				console.log('Notification clicked');
				new AudioPlay(__dirname + '/sounds/money.wav', true);
			};
		}, 4096);
	};
	start();

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Created by trzmiel007 on 12.04.2016.
	 */
	
	const LOADING = 'LOADING';
	const STOPPED = 'STOPPED';
	const PLAYING = 'PLAYING';
	const PAUSED = 'PAUSED';
	
	module.exports = class AudioPlay {
	    constructor(audioFile, autoplay) {
	        this.src = audioFile;
	        this.audio = new Audio(this.src);
	        this.currentTime = 0;
	        this.state = LOADING;
	        this.audio.addEventListener('ended', () => this.state = STOPPED);
	        var autoplayFunction = () => {
	            autoplay ? this.play() : this.state = STOPPED;
	            return this.audio.removeEventListener('canplaythrough', autoplayFunction);
	        };
	        this.audio.addEventListener('canplaythrough', autoplayFunction);
	    }
	    /*autoplayFunction(){
	        this.autoplay ? this.play() : this.state = STOPPED;
	        return this.audio.removeEventListener('canplaythrough',this.autoplayFunction);
	    }*/
	    play() {
	        this.audio.currentTime = this.currentTime;
	        this.audio.play();
	        this.state = PLAYING;
	    }
	    stop() {
	        this.audio.stop();
	        this.currentTime = 0;
	        this.state = STOPPED;
	    }
	    pause() {
	        this.currentTime = this.audio.currentTime;
	        this.audio.pause();
	        this.state = PAUSED;
	    }
	    playPause() {
	        if (this.state == PLAYING) {
	            this.pause();
	        } else {
	            this.play();
	        }
	    }
	    getAudioState() {
	        return this.state;
	    }
	    getAudio() {
	        return this.audio;
	    }
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzA0YTZiMjA0NGQ1OWQ4ZmEzNDEiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXVkaW9QbGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RDQTs7Ozs7O0FBS0EsUUFBTyxVQUFQLEdBQW9CLFNBQVMsVUFBVCxDQUFvQixNQUFwQixFQUE0QjtBQUMvQyxNQUFJLE1BQU0sT0FBTyxHQUFQLENBRHFDO0FBRS9DLE1BQUksWUFBWSxPQUFPLE9BQVAsQ0FGK0I7QUFHL0MsTUFBSSxZQUFZLG9CQUFRLENBQVIsQ0FBWixDQUgyQzs7QUFLL0MsTUFBSSxlQUFlLFNBQVMsZ0JBQVQsQ0FBMEIsZUFBMUIsQ0FBZixDQUwyQzs7QUFPL0MsT0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksYUFBYSxNQUFiLEVBQXFCLEVBQUUsQ0FBRixFQUFLO0FBQzdDLE9BQUksY0FBYyxhQUFhLENBQWIsQ0FBZCxDQUR5QztBQUU3QyxPQUFJLFlBQVksWUFBWSxPQUFaLENBQW9CLEtBQXBCLENBRjZCOztBQUk3QyxlQUFZLFdBQVosRUFBeUIsU0FBekIsRUFKNkM7R0FBOUM7O0FBT0EsV0FBUyxXQUFULENBQXFCLEVBQXJCLEVBQXlCLEVBQXpCLEVBQTZCO0FBQzVCLE1BQUcsYUFBSCxDQUFpQixNQUFqQixFQUF5QixLQUF6QixDQUErQixlQUEvQixHQUFpRCxjQUFjLEVBQWQsR0FBbUIsUUFBbkIsQ0FEckI7QUFFNUIsT0FBSSxRQUFRLElBQUksU0FBSixDQUFjLFlBQVksVUFBWixHQUF5QixFQUF6QixHQUE4QixNQUE5QixDQUF0QjtBQUZ3QixLQUc1QixDQUFHLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLE1BQUs7QUFDakMsVUFBTSxTQUFOLEdBRGlDO0lBQUwsQ0FBN0IsQ0FINEI7R0FBN0I7O0FBUUEsTUFBSSxRQUFRLFNBQVMsYUFBVCxDQUF1QixRQUF2QixDQUFSLENBdEIyQzs7QUF3Qi9DLFFBQU0sZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsTUFBSztBQUNwQyxPQUFJLElBQUosQ0FBUyxtQkFBVCxFQURvQztHQUFMLENBQWhDLENBeEIrQzs7QUE0Qi9DLE1BQUksRUFBSixDQUFPLGlCQUFQLEVBQTBCLENBQUMsRUFBRCxFQUFLLEdBQUwsS0FBYTtBQUN0QyxPQUFJLFFBQVEsSUFBSSxVQUFKLENBQWUsT0FBZixDQUFSLENBRGtDO0FBRXRDLGdCQUFhLEdBQWIsRUFBa0IsYUFBbEIsQ0FBZ0MsS0FBaEMsRUFGc0M7R0FBYixDQUExQixDQTVCK0M7O0FBaUMvQyxhQUFXLE1BQUs7QUFDZixPQUFJLGlCQUFpQixJQUFJLFlBQUosQ0FBaUIsT0FBakIsRUFBMEI7QUFDOUMsVUFBTSw0QkFBTjtJQURvQixDQUFqQixDQURXOztBQUtmLGtCQUFlLE9BQWYsR0FBeUIsWUFBWTtBQUNwQyxZQUFRLEdBQVIsQ0FBWSxzQkFBWixFQURvQztBQUVwQyxRQUFJLFNBQUosQ0FBYyxZQUFZLG1CQUFaLEVBQWlDLElBQS9DLEVBRm9DO0lBQVosQ0FMVjtHQUFMLEVBU1IsSUFUSCxFQWpDK0M7RUFBNUI7QUE0Q3BCLFM7Ozs7Ozs7Ozs7QUM3Q0EsT0FBTSxVQUFVLFNBQVY7QUFDTixPQUFNLFVBQVUsU0FBVjtBQUNOLE9BQU0sVUFBVSxTQUFWO0FBQ04sT0FBTSxTQUFTLFFBQVQ7O0FBRU4sUUFBTyxPQUFQLEdBQWlCLE1BQU0sU0FBTixDQUFnQjtBQUM3QixpQkFBWSxTQUFaLEVBQXNCLFFBQXRCLEVBQStCO0FBQzNCLGNBQUssR0FBTCxHQUFXLFNBQVgsQ0FEMkI7QUFFM0IsY0FBSyxLQUFMLEdBQWEsSUFBSSxLQUFKLENBQVUsS0FBSyxHQUFMLENBQXZCLENBRjJCO0FBRzNCLGNBQUssV0FBTCxHQUFtQixDQUFuQixDQUgyQjtBQUkzQixjQUFLLEtBQUwsR0FBYSxPQUFiLENBSjJCO0FBSzNCLGNBQUssS0FBTCxDQUFXLGdCQUFYLENBQTRCLE9BQTVCLEVBQW9DLE1BQUksS0FBSyxLQUFMLEdBQWEsT0FBYixDQUF4QyxDQUwyQjtBQU0zQixhQUFJLG1CQUFtQixNQUFNO0FBQ3pCLHdCQUFXLEtBQUssSUFBTCxFQUFYLEdBQXlCLEtBQUssS0FBTCxHQUFhLE9BQWIsQ0FEQTtBQUV6QixvQkFBTyxLQUFLLEtBQUwsQ0FBVyxtQkFBWCxDQUErQixnQkFBL0IsRUFBZ0QsZ0JBQWhELENBQVAsQ0FGeUI7VUFBTixDQU5JO0FBVTNCLGNBQUssS0FBTCxDQUFXLGdCQUFYLENBQTRCLGdCQUE1QixFQUE2QyxnQkFBN0MsRUFWMkI7TUFBL0I7Ozs7O0FBRDZCLFNBaUI3QixHQUFNO0FBQ0YsY0FBSyxLQUFMLENBQVcsV0FBWCxHQUF5QixLQUFLLFdBQUwsQ0FEdkI7QUFFRixjQUFLLEtBQUwsQ0FBVyxJQUFYLEdBRkU7QUFHRixjQUFLLEtBQUwsR0FBYSxPQUFiLENBSEU7TUFBTjtBQUtBLFlBQU07QUFDRixjQUFLLEtBQUwsQ0FBVyxJQUFYLEdBREU7QUFFRixjQUFLLFdBQUwsR0FBbUIsQ0FBbkIsQ0FGRTtBQUdGLGNBQUssS0FBTCxHQUFhLE9BQWIsQ0FIRTtNQUFOO0FBS0EsYUFBTztBQUNILGNBQUssV0FBTCxHQUFtQixLQUFLLEtBQUwsQ0FBVyxXQUFYLENBRGhCO0FBRUgsY0FBSyxLQUFMLENBQVcsS0FBWCxHQUZHO0FBR0gsY0FBSyxLQUFMLEdBQWEsTUFBYixDQUhHO01BQVA7QUFLQSxpQkFBVztBQUNQLGFBQUcsS0FBSyxLQUFMLElBQWMsT0FBZCxFQUFzQjtBQUNyQixrQkFBSyxLQUFMLEdBRHFCO1VBQXpCLE1BRUs7QUFDRCxrQkFBSyxJQUFMLEdBREM7VUFGTDtNQURKO0FBT0EscUJBQWU7QUFDWCxnQkFBTyxLQUFLLEtBQUwsQ0FESTtNQUFmO0FBR0EsZ0JBQVU7QUFDTixnQkFBTyxLQUFLLEtBQUwsQ0FERDtNQUFWO0VBMUNhLEMiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA3MDRhNmIyMDQ0ZDU5ZDhmYTM0MVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVkIGJ5IHRyem1pZWwwMDcgb24gMTIuMDQuMjAxNi5cbiAqL1xud2luZG93LnN0YXJ0cG9pbnQgPSBmdW5jdGlvbiBzdGFydHBvaW50KGNvbmZpZykge1xuXHR2YXIgaXBjID0gY29uZmlnLmlwYztcblx0dmFyIF9fZGlybmFtZSA9IGNvbmZpZy5kaXJuYW1lO1xuXHR2YXIgQXVkaW9QbGF5ID0gcmVxdWlyZSgnLi9hdWRpb1BsYXkuanMnKTtcblxuXHR2YXIgc291bmRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbi1zb3VuZCcpO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc291bmRCdXR0b25zLmxlbmd0aDsgKytpKSB7XG5cdFx0dmFyIHNvdW5kQnV0dG9uID0gc291bmRCdXR0b25zW2ldO1xuXHRcdHZhciBzb3VuZE5hbWUgPSBzb3VuZEJ1dHRvbi5kYXRhc2V0LnNvdW5kO1xuXG5cdFx0YWRkTGlzdGVuZXIoc291bmRCdXR0b24sIHNvdW5kTmFtZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRMaXN0ZW5lcihlbCwgc24pIHtcblx0XHRlbC5xdWVyeVNlbGVjdG9yKCdzcGFuJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcImltZy8nICsgc24gKyAnLnBuZ1wiKSc7XG5cdFx0dmFyIGF1ZGlvID0gbmV3IEF1ZGlvUGxheShfX2Rpcm5hbWUgKyAnL3NvdW5kcy8nICsgc24gKyAnLndhdicpOy8vbmV3IEF1ZGlvKF9fZGlybmFtZSArICcvc291bmRzLycrc24rJy53YXYnKTtcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuXHRcdFx0YXVkaW8ucGxheVBhdXNlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcblxuXHRjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuXHRcdGlwYy5zZW5kKCdjbG9zZS1tYWluLXdpbmRvdycpO1xuXHR9KTtcblxuXHRpcGMub24oJ2dsb2JhbC1zaG9ydGN1dCcsIChldiwgYXJnKSA9PiB7XG5cdFx0dmFyIGV2ZW50ID0gbmV3IE1vdXNlRXZlbnQoJ2NsaWNrJyk7XG5cdFx0c291bmRCdXR0b25zW2FyZ10uZGlzcGF0Y2hFdmVudChldmVudCk7XG5cdH0pO1xuICAgIFxuXHRzZXRUaW1lb3V0KCgpPT4ge1xuXHRcdGxldCBteU5vdGlmaWNhdGlvbiA9IG5ldyBOb3RpZmljYXRpb24oJ1RpdGxlJywge1xuXHRcdFx0Ym9keTogJ0xvcmVtIElwc3VtIERvbG9yIFNpdCBBbWV0J1xuXHRcdH0pO1xuXG5cdFx0bXlOb3RpZmljYXRpb24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdOb3RpZmljYXRpb24gY2xpY2tlZCcpO1xuXHRcdFx0bmV3IEF1ZGlvUGxheShfX2Rpcm5hbWUgKyAnL3NvdW5kcy9tb25leS53YXYnLCB0cnVlKTtcblx0XHR9XG5cdH0sIDQwOTYpO1xufTtcbnN0YXJ0KCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9pbmRleC5qc1xuICoqLyIsIi8qKlxuICogQ3JlYXRlZCBieSB0cnptaWVsMDA3IG9uIDEyLjA0LjIwMTYuXG4gKi9cblxuY29uc3QgTE9BRElORyA9ICdMT0FESU5HJztcbmNvbnN0IFNUT1BQRUQgPSAnU1RPUFBFRCc7XG5jb25zdCBQTEFZSU5HID0gJ1BMQVlJTkcnO1xuY29uc3QgUEFVU0VEID0gJ1BBVVNFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQXVkaW9QbGF5IHtcbiAgICBjb25zdHJ1Y3RvcihhdWRpb0ZpbGUsYXV0b3BsYXkpe1xuICAgICAgICB0aGlzLnNyYyA9IGF1ZGlvRmlsZTtcbiAgICAgICAgdGhpcy5hdWRpbyA9IG5ldyBBdWRpbyh0aGlzLnNyYyk7XG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICB0aGlzLnN0YXRlID0gTE9BRElORztcbiAgICAgICAgdGhpcy5hdWRpby5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsKCk9PnRoaXMuc3RhdGUgPSBTVE9QUEVEKTtcbiAgICAgICAgdmFyIGF1dG9wbGF5RnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgICAgICBhdXRvcGxheSA/IHRoaXMucGxheSgpIDogdGhpcy5zdGF0ZSA9IFNUT1BQRUQ7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdWRpby5yZW1vdmVFdmVudExpc3RlbmVyKCdjYW5wbGF5dGhyb3VnaCcsYXV0b3BsYXlGdW5jdGlvbik7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheXRocm91Z2gnLGF1dG9wbGF5RnVuY3Rpb24pO1xuICAgIH1cbiAgICAvKmF1dG9wbGF5RnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5hdXRvcGxheSA/IHRoaXMucGxheSgpIDogdGhpcy5zdGF0ZSA9IFNUT1BQRUQ7XG4gICAgICAgIHJldHVybiB0aGlzLmF1ZGlvLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NhbnBsYXl0aHJvdWdoJyx0aGlzLmF1dG9wbGF5RnVuY3Rpb24pO1xuICAgIH0qL1xuICAgIHBsYXkoKXtcbiAgICAgICAgdGhpcy5hdWRpby5jdXJyZW50VGltZSA9IHRoaXMuY3VycmVudFRpbWU7XG4gICAgICAgIHRoaXMuYXVkaW8ucGxheSgpO1xuICAgICAgICB0aGlzLnN0YXRlID0gUExBWUlORztcbiAgICB9XG4gICAgc3RvcCgpe1xuICAgICAgICB0aGlzLmF1ZGlvLnN0b3AoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBTVE9QUEVEO1xuICAgIH1cbiAgICBwYXVzZSgpe1xuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gdGhpcy5hdWRpby5jdXJyZW50VGltZTtcbiAgICAgICAgdGhpcy5hdWRpby5wYXVzZSgpO1xuICAgICAgICB0aGlzLnN0YXRlID0gUEFVU0VEO1xuICAgIH1cbiAgICBwbGF5UGF1c2UoKXtcbiAgICAgICAgaWYodGhpcy5zdGF0ZSA9PSBQTEFZSU5HKXtcbiAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnBsYXkoKVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldEF1ZGlvU3RhdGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfVxuICAgIGdldEF1ZGlvKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmF1ZGlvO1xuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hdWRpb1BsYXkuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9