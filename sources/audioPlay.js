/**
 * Created by trzmiel007 on 12.04.2016.
 */

const LOADING = 'LOADING';
const STOPPED = 'STOPPED';
const PLAYING = 'PLAYING';
const PAUSED = 'PAUSED';

module.exports = class AudioPlay {
    constructor(audioFile,autoplay){
        this.src = audioFile;
        this.audio = new Audio(this.src);
        this.currentTime = 0;
        this.state = LOADING;
        this.audio.addEventListener('ended',()=>this.state = STOPPED);
        var autoplayFunction = () => {
            autoplay ? this.play() : this.state = STOPPED;
            return this.audio.removeEventListener('canplaythrough',autoplayFunction);
        };
        this.audio.addEventListener('canplaythrough',autoplayFunction);
    }
    /*autoplayFunction(){
        this.autoplay ? this.play() : this.state = STOPPED;
        return this.audio.removeEventListener('canplaythrough',this.autoplayFunction);
    }*/
    play(){
        this.audio.currentTime = this.currentTime;
        this.audio.play();
        this.state = PLAYING;
    }
    stop(){
        this.audio.stop();
        this.currentTime = 0;
        this.state = STOPPED;
    }
    pause(){
        this.currentTime = this.audio.currentTime;
        this.audio.pause();
        this.state = PAUSED;
    }
    playPause(){
        if(this.state == PLAYING){
            this.pause();
        }else{
            this.play()
        }
    }
    getAudioState(){
        return this.state;
    }
    getAudio(){
        return this.audio;
    }
};