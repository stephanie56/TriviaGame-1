/* TIMER COUNTDOWN below */

// $("#TIME").innerHTML = "Time Remaining " + 00 + ":" + 30;
//     startTimer();

// function startTimer() {
//   var presentTime = $("#TIME").innerHTML;
// //   var timeArray = presentTime.split(/[:]+/);
//   var m = timeArray[0];
//   var s = checkSecond((timeArray[1] - 1));
//   if(s==59){m=m-1}
    
//   $("#TIME").innerHTML = 
//   m + ":" + s;
//   setTimeout(startTimer, 1000);
// }

// function checkSecond(sec) {
//   if (sec < 10 && sec >= 0) {sec = "0" + sec}; 
//   if (sec < 0) {sec = "59"};
//   return sec;
// }
/* TIMER COUNTDOWN above */

/* GAME QUESTIONS */ 

var points = 0;

//
var questionOne = $("#q1a");
var questionTwo = $("#q2a");
var questionThree = $("#q3a");
var questionFour = $("#q4a");
var questionFive = $("#q5a");
var questionSix = $("#q6a");

var questionLoop = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix];

$("#7aa").on("click", function() {
//     for (var i = 0; i < questionLoop.length; i++) {
//         console.log(i)
//         console.log(questionLoop[i])
//     }

    /** HINTS **/
    // Step1: Get value of the selected radio button (e.g. the selected radio button with a name of #q1a in this example )
    var answer1 = $( "input[name=q1a]:checked" ).val();
    
    // Step2: iterate each answer
    // userAnswers = [answer1, answer2 ... answer5];
    for (var i = 0; i < userAnswers.length; i++) {
        // compared each user answer with true; if true, points++
    }    
});
     
    var postScore = Math.round((points/6)*100); 
        $("#postpoints").innerHTML +- postScore;

    
