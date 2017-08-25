console.log("main script loaded");

// begin timer functions

$('#playPause').on('click', function () {
  console.log("before if/switch statement");
  console.log(button);

  // switch (button == '► PLAY') {
  //   case true:
  //     console.log(seconds, "time before resume/play");
  //     runningWatchDown = setInterval(timerDown, 1000);
  //     button = $('#playPause').text('❙❙ PAUSE');
  //     break;
  //   case false:
  //     clearInterval(runningWatchDown);
  //     console.log(seconds, "time at pause");
  //     console.log(button);
  //     button = $('#playPause').text('► PLAY');
  //     console.log(button);
  //     break;
  // };
  // attempted to fix problem with switch statement. it changes nothing. (lol)

  if (button == "► PLAY") {
    runningWatchUp = setInterval(timerUp, 1000);
    button = $('#playPause').text('❙❙ PAUSE');
    }
  else {
    clearInterval(runningWatchUp);
    clearInterval(runningWatchDown);
    button = $('#playPause').text('► PLAY');
    }
  // working from previous commit

  // if (button == '► PLAY') {
  //   console.log(seconds, "time before resume/play");
  //   runningWatchDown = setInterval(timerDown, 1000);
  //   button = $('#playPause').text('❙❙ PAUSE');
  //   console.log(button);
  //   // disableCupcakeButtons();
  //   }
  // else {
  //   clearInterval(runningWatchDown);
  //   console.log(seconds, "time at pause");
  //   button = $('#playPause').text('► PLAY');
  //   }
  // messed up code
});
// this function also disables all the cupcake buttons so you can't work the game while you're paused.


$('#reset').on('click', function () {
  time = "00:30";
  $('#timer').text(time);
  seconds = 30;
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
  spriteSelectClass = spriteSelectClass.split(" ").pop();
  var selectTopping = spriteSelectClass;
  // spriteSelectClass is defined in cupcake.js.
  // comparison values.

  if ((selectCakeColor == randCakeBody) && (selectFrostColor == randFrostTop) && ((selectSprinkColor[0] == randSprinkTop[0]) && (selectSprinkColor[1] == randSprinkTop[1])) && (selectTopping == randTopping)) {
    console.log("yay");
    calcFunction();
    scoreUp();
    // increase score, prepare for cupcake reset.

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
    $($('.randFruitTop')).attr('id', toppingType[randCalc4]);
    randTopping = $($('.randFruitTop')).attr('id');
    // create new random cupcake.

    cakeReset();
    // reset submitted cupcake.
    }
  else {
    console.log("sads");
  }
});
// submitting the cupcake to the customer.

$('.reset').on('click', cakeReset);
// reset your cupcake.

// end cupcake functions
