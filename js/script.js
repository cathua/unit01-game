console.log("main script loaded");

$('#playPause').on('click', function () {
  if (button == "► PLAY") {
    runningWatchUp = setInterval(timerUp, 1000);
    button = $('#playPause').text('❙❙ PAUSE');
} else {
  clearInterval(runningWatchUp);
  clearInterval(runningWatchDown);
  button = $('#playPause').text('► PLAY');
}
});

$('#reset').on('click', function () {
  time = "00:00";
  $('#timer').text(time);
});

// $('#countdown').on('click', function() {
//   runningWatchDown = setInterval(timerDown, 1000);
// })
