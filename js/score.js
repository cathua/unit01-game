console.log("scoring mechanism loaded");

var score = 0;
var scoreVal = $('#scoreVal').text();
// console.log(scoreVal);

var scoreUp = function () {
  console.log("stuff");
  score += 1;
  // console.log(score);
  if (score < 10) {
    scoreVal = "0" + score;
  } else if (score > 10) {
    scoreVal = score;
  };
  // console.log(score);
  $('#scoreVal').text(scoreVal);
};
