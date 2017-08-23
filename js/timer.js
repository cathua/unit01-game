// Starting & stopping the timer.
console.log("timer loaded");

var minutes = 0;
var seconds = 0;
var time = $('#timer').text();
var button = $('#playPause').text();
// console.log(time);
// console.log(button);

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

var timerDown = function () {
  // console.log("hello");
  seconds -= 1;
  // console.log(seconds);
  let sec = seconds % 60;
  let min = (seconds - sec)/60;
  // console.log(min);
  if (seconds < 0) {
    var zero = "00:00"
    $('#timer').text(zero);
  }
  else if (min == 0) {
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


var runningWatchUp;
var runningWatchDown;

// $('#playPause').on('click', function () {
//   // console.log(button);
//   if (button == "► PLAY") {
//     // console.log("hey");
//     runningWatchUp = setInterval(timerUp, 1000);
//     button = $('#playPause').text('❙❙ PAUSE');
//     // console.log(button);
// } else {
//   clearInterval(runningWatchUp);
//   clearInterval(runningWatchDown);
//   button = $('#playPause').text('► PLAY');
// }
// // console.log("hey");
// });
// // $('#pause').on('click', function () {
// //   clearInterval(runningWatchUp);
// //   clearInterval(runningWatchDown);
// // });
// $('#reset').on('click', function () {
//   time = "00:00";
//   $('#timer').text(time);
// })
// // $('#countdown').on('click', function() {
// //   runningWatchDown = setInterval(timerDown, 1000);
// // })
