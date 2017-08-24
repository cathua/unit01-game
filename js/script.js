console.log("main script loaded");

// begin timer functions

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

// end timer functions

// begin cupcake functions

$('.submit').on('click', function (e) {
  e.preventDefault();
  var selectCakeColor = $($('.cakeSelect')[cakeSelectIndex[0]]).css('background-color');
  var selectFrostColor = $($('.frostSelect')[frostSelectIndex[0]]).css('background-color');
  var selectSprinkColor = [$($('.frostSelect')[sprinkSelectIndex[1]]).css('background-color'), $($('.frostSelect')[sprinkSelectIndex[2]]).css('background-color')];
  console.log(selectSprinkColor, 'select', randSprinkTop, 'rand');
  if ((selectCakeColor == randCakeBody) && (selectFrostColor == randFrostTop) && ((selectSprinkColor[0] == randSprinkTop[0]) && (selectSprinkColor[1] == randSprinkTop[1]))) {
    console.log("yay");
    calcFunction();
    scoreUp();
    // console.log(randCalc, 'rC')
    for (let i = 0; i < cakeSelectIndex.length; i++) {
      $($('.randCakeBody')[cakeSelectIndex[i]]).css('background-color', cakeColor[randCalc]);
      randCakeBody = $($('.randCakeBody')[cakeSelectIndex[i]]).css('background-color')
    };
    for (let i = 0; i < frostSelectIndex.length; i++) {
      $($('.randFrostTop')[frostSelectIndex[i]]).css('background-color', frostColor[randCalc2]);
      randFrostTop = $($('.randFrostTop')[frostSelectIndex[i]]).css('background-color');
    };
    for (let i = 0; i < sprinkSelectIndex.length; i++) {
      if (randCalc3 == 0 || randCalc3 == 1 || randCalc3 == 2) {
        $($('.randFrostTop')[sprinkSelectIndex[i]]).css('background-color', sprinkleColor[randCalc3]);
      }
      else {
        $($('.randFrostTop')[sprinkSelectIndex[i]]).css('background-color', sprinkleColor[3][colorCount%3]);
        colorCount ++;
      }
      randSprinkTop = [$($('.randFrostTop')[sprinkSelectIndex[i-1]]).css('background-color'), $($('.randFrostTop')[sprinkSelectIndex[i]]).css('background-color')];
    };
    cakeReset();
  } else {
    console.log("sads");
  }
});
// submitting the cupcake to the customer.

$('.reset').on('click', cakeReset);
// reset your cupcake.

// end cupcake functions
