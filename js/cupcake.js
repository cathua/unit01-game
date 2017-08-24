console.log("cupcake customization loaded");

cakeColor = ['#ffc9f0', '#f0ed9e', '#563403', '#a0daf7'];
frostColor = ['#ffffff', '#563403', '#c9ceff', '#b4f99f'];
sprinkleColor = ['#ffcb77', '#ffc9f0', '#fff', '#fff']

cakeSelectIndex = [177, 183, 195, 196, 197, 201, 202, 203, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 271, 272, 273, 274, 275, 276, 277, 278, 279];

frostSelectIndex = [26, 27, 28, 29, 30, 43, 44, 45, 46, 47, 48, 50, 51, 61, 62, 63, 65, 66, 67, 68, 69, 70, 71, 79, 80, 81, 82, 83, 84, 85, 87, 88, 89, 90, 91, 98, 99, 100, 102, 103, 104, 105, 106, 107, 109, 110, 116, 117, 118, 119, 120, 121, 123, 124, 125, 126, 127, 128, 129, 130, 135, 137, 138, 140, 141, 142, 143, 144, 146, 147, 149, 154, 155, 156, 157, 159, 160, 162, 163, 165, 166, 167, 168, 173, 174, 175, 179, 180, 181, 185, 186, 187];

sprinkSelectIndex = [49, 64, 86, 101, 108, 122, 136, 148, 161];

var randCalc;
var calcFunction = function () {
  randCalc = Math.floor(Math.random() * 4);
}
calcFunction();

// necessary variables and arrays.


for (let i = 0; i < cakeSelectIndex.length; i++) {
  $($('.randCakeBody')[cakeSelectIndex[i]]).css('background-color', cakeColor[randCalc]);
  var randCakeBody = $($('.randCakeBody')[cakeSelectIndex[i]]).css('background-color')
}
for (let i = 0; i < frostSelectIndex.length; i++) {
  $($('.randFrostTop')[frostSelectIndex[i]]).css('background-color', frostColor[randCalc]);
  var randFrostTop = $($('.randFrostTop')[frostSelectIndex[i]]).css('background-color');
}
for (let i = 0; i < sprinkSelectIndex.length; i++) {
  $($('.randFrostTop')[sprinkSelectIndex[i]]).css('background-color', sprinkleColor[randCalc]);
  var randSprinkTop = $($('.randFrostTop')[sprinkSelectIndex[i]]).css('background-color');
}
// randomly generating cupcake.

$('#color1').on('click', function() {
  for (let i = 0; i < cakeSelectIndex.length; i++) {
    $($('.cakeSelect')[cakeSelectIndex[i]]).css('background-color', cakeColor[0]);
  };
});
$('#color2').on('click', function () {
  for (let i = 0; i < cakeSelectIndex.length; i++) {
    $($('.cakeSelect')[cakeSelectIndex[i]]).css('background-color', cakeColor[1]);
  };
});
$('#color3').on('click', function () {
  for (let i = 0; i < cakeSelectIndex.length; i++) {
    $($('.cakeSelect')[cakeSelectIndex[i]]).css('background-color', cakeColor[2]);
  };
});
$('#color4').on('click', function () {
  for (let i = 0; i < cakeSelectIndex.length; i++) {
    $($('.cakeSelect')[cakeSelectIndex[i]]).css('background-color', cakeColor[3]);
  };
});
$('#frost1').on('click', function() {
  for (let i = 0; i < frostSelectIndex.length; i++) {
    $($('.frostSelect')[frostSelectIndex[i]]).css('background-color', frostColor[0]);
  };
});
$('#frost2').on('click', function () {
  for (let i = 0; i < frostSelectIndex.length; i++) {
    $($('.frostSelect')[frostSelectIndex[i]]).css('background-color', frostColor[1]);
  };
});
$('#frost3').on('click', function () {
  for (let i = 0; i < frostSelectIndex.length; i++) {
    $($('.frostSelect')[frostSelectIndex[i]]).css('background-color', frostColor[2]);
  };
});
$('#frost4').on('click', function () {
  for (let i = 0; i < frostSelectIndex.length; i++) {
    $($('.frostSelect')[frostSelectIndex[i]]).css('background-color', frostColor[3]);
    // $($('.randFrostTop')[frostSelectIndex[i]]).css('background-color', frostColor[3]);
  };
});
$('#sprink1').on('click', function () {
  for (let i = 0; i < sprinkSelectIndex.length; i++) {
    $($('.frostSelect')[sprinkSelectIndex[i]]).css('background-color', sprinkleColor[0]);
  };
});
$('#sprink2').on('click', function () {
  for (let i = 0; i < sprinkSelectIndex.length; i++) {
    $($('.frostSelect')[sprinkSelectIndex[i]]).css('background-color', sprinkleColor[1]);
  };
});
$('#sprink3').on('click', function () {
  for (let i = 0; i < sprinkSelectIndex.length; i++) {
    $($('.frostSelect')[sprinkSelectIndex[i]]).css('background-color', sprinkleColor[2]);
  };
});
$('#sprink4').on('click', function () {
  for (let i = 0; i < sprinkSelectIndex.length; i++) {
    $($('.frostSelect')[sprinkSelectIndex[i]]).css('background-color', sprinkleColor[3]);
  };
});
// modifying your cupcake.

var cakeReset = function() {
  for (let i = 0; i < cakeSelectIndex.length; i++) {
    $($('.cakeSelect')[cakeSelectIndex[i]]).css('background-color', '#999999');
  };
  for (let i = 0; i < frostSelectIndex.length; i++) {
    $($('.frostSelect')[frostSelectIndex[i]]).css('background-color', '#999999');
  };
  for (let i = 0; i < sprinkSelectIndex.length; i++) {
    $($('.frostSelect')[sprinkSelectIndex[i]]).css('background-color', '#999999');
  };
}
