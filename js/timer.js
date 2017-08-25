// Starting & stopping the timer.
console.log("timer loaded");

var minutes = 0;
var seconds = 30;
var time = $('#timer').text();
var button = $('#playPause').text();
// setting relevant variables

var timerUp = function () {
  // console.log("hello");
  seconds += 1;
  // console.log(seconds);
  let sec = seconds % 60;
  let min = (seconds - sec)/60;
  // console.log(min);
  if (min == 0) {
    // console.log("minute 0");
    if (sec < 10) {
      time = "00:0" + sec;
      // console.log(time);
    }
    else if (10 <= sec && sec < 60) {
      time = "00:" + seconds;
      // console.log(time);
    }
    console.log(time);
    $('#timer').text(time);
  }
  else if (min >= 1 && min < 10) {
    if (sec < 10) {
      time = "0" + min + ":0" + sec;
      console.log(time);
    }
    else if (10 <= sec && sec < 60) {
      time = "0" + min + ":" + sec;
      console.log(time);
    }
    $('#timer').text(time);
  }
  else if (min > 10) {
    if (sec < 10) {
      time = min + ":0" + sec;
      // console.log(time);
    }
    else if (10 <= sec && sec < 60) {
      time = min + ":" + seconds;
      // console.log(time);
    }
    console.log(time);
    $('#timer').text(time);
  }
};
// timer goes up by one second intervals. this isn't super dry though :(


var timerDown = function () {
  // console.log("hello");
  console.log(seconds, "at start of timerDown");
  seconds -= 1;
  let sec = seconds % 60;
  let min = (seconds - sec)/60;
  if (seconds < 0) {
    var zero = "00:00"
    $('#timer').text(zero);
    button = $('#playPause').text('► PLAY');
    // included this to change the play button.
    // console.log(seconds, "in if statement");
  }
  else if (min == 0) {
    if (sec < 10) {
      time = "00:0" + sec;
    }
    else if (10 <= sec && sec < 60) {
      time = "00:" + seconds;
    }
    console.log(time);
    $('#timer').text(time);
  }
  else if (min >= 1 && min < 10) {
    if (sec < 10) {
      time = "0" + min + ":0" + sec;
      console.log(time);
    }
    else if (10 <= sec && sec < 60) {
      time = "0" + min + ":" + sec;
      console.log(time);
    }
    $('#timer').text(time);
  }
  else if (min > 10) {
    if (sec < 10) {
      time = min + ":0" + sec;
    }
    else if (10 <= sec && sec < 60) {
      time = min + ":" + seconds;
    }
    console.log(time);
    $('#timer').text(time);
  }
};
// timer goes down by one second intervals. stops at 0. play button resets at 0.

var disableCupcakeButtons = function () {
  if ($('#playPause').text() == '❙❙ PAUSE') {
    console.log("sup");
  }
};


var runningWatchUp;
var runningWatchDown;
