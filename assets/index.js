//Media Player 
function MediaPlayer(config) {
  this.media = config.el
  this.plugins = config.plugins || [];

  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function() {
  this.plugins.forEach(plugin => {
    plugin.run(this);
  })
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

MediaPlayer.prototype.mute = function() {
  this.media.muted = true;
}

MediaPlayer.prototype.unmute = function() {
  this.media.muted = false;
}

//plugin Autoplay
function AutoPlay() {

}

AutoPlay.prototype.run = function(player) {
  player.mute();
  player.play();
};


//


//index.js

const video = document.querySelector("video");
const button = document.querySelector("button");    
const player = new MediaPlayer({el: video, plugins: [new AutoPlay()]});

button.onclick = () => player.togglePlay();