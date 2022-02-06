//Media Player 
function MediaPlayer(config) {
  this.media = config.el
  this.plugins = config.plugins || [];

  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function() {
  const player = {
    play: () => this.play(),
    puase: () => this.pause(),
    media: this.media,

    get muted() {
      return this.media.muted;
    },
    set muted(value) {
      this.media.muted = value;
    },
  };
  
  this.plugins.forEach(plugin => {
    plugin.run(player);
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

MediaPlayer.prototype.toggleMuted = function() {
  if(this.media.muted) {
      this.unmute();
  } else {
      this.mute();
  }
};

//plugin Autoplay
function AutoPlay() {

}

AutoPlay.prototype.run = function(player) {
  if(!player.muted){
    player.muted = true;
  }
  player.play();
};


//


//index.js

const video = document.querySelector("video");
const button = document.querySelector('#playButton');  
const buttonMuted = document.querySelector('#mutedButton')  
const player = new MediaPlayer({el: video, plugins: [new AutoPlay()
]});

button.onclick = () => player.togglePlay();
buttonMuted.onclick = () => player.toggleMuted();