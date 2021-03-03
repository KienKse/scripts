javascript: t = 0;

const regexp = /\w+\-(\w+|\d+)/gi;

function playAudio() {
    var audioElement = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav');
    audioElement.play();
}

var loop = setInterval(() => {
  var msg = document.getElementsByClassName('chat-line__no-background tw-inline');
  var text = msg[msg.length - 1];
    if(text.textContent.match(regexp)) {
        //TODO: include prototype function dispatch event on Enter
        // enterButton();
    }
}, 5000);