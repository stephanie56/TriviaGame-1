/* TIMER COUNTDOWN below */
$('#TIME').innerHTML = "Time Remaining " + 00 + ":" + 30;
    startTimer();

function startTimer() {
  var presentTime = $('#TIME').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
    
  $('#TIME').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; 
  if (sec < 0) {sec = "59"};
  return sec;
}
/* TIMER COUNTDOWN above */

/* GAME QUESTIONS */ 

var points = 0;

var questionOne = $("#q1one");
var questionTwo = $("#q2two");
var questionThree = $("#q3three");
var questionFour = $("#q4four");
var questionFive = $("#q4five");
var questionSix = $("#q4Six");

var questionLoop = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix];

function submitted () {
    for (var i = 0; i < questionLoop.length; i++)

        } 
        var postScore = Math.round((score/6)*100);
        $("#postpoints").innerHTML +- postScore;
}