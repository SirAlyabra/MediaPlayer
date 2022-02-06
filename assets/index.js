//Media Player 
function MediaPlayer(config) {
  this.media = config.el
  this.plugins = config.plugins || [];

  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function() {
  const player = {
    play: () => this.play(),
    pause: () => this.pause(),
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


// AutoPause

class AutoPause {
  constructor() {
    this.threshold = 0.25;

    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  run(player) {
    this.player = player;

    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold:  this.threshold
     });
     observer.observe(this.player.media);

     document.addEventListener("visibilitychange", this.handleVisibilityChange)
  }


  handleIntersection(entries) {
    const entry = entries[0];

    const isVisible = entry.intersectionRatio >  this.threshold

    if(isVisible){
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  handleVisibilityChange() {
    const isVisible = document.visibilityState === "visible";
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}


//index.js

const video = document.querySelector("video");
const button = document.querySelector('#playButton');  
const buttonMuted = document.querySelector('#mutedButton')  
const player = new MediaPlayer({el: video, plugins: [new AutoPlay(), new AutoPause()
]});

button.onclick = () => player.togglePlay();
buttonMuted.onclick = () => player.toggleMuted();