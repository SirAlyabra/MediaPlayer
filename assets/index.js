//Media Player 
function MediaPlayer(config) {
  this.media = config.el
}

MediaPlayer.prototype.play = function() {
  this.media.play();
};

MediaPlayer.prototype.pause = function() {
    this.media.pause();
};

MediaPlayer.prototype.togglePlay = function() {
    if(this.media.paused) {
        this.play();
    } else {
        this.pause();
    }
};


//index.js

const video = document.querySelector("video");
const button = document.querySelector("button");    
const player = new MediaPlayer({el: video});

button.onclick = () => player.togglePlay();