// var currentDay = ('April 28th, 2021');
var currentDay = $('#time-display');
$(".lead").text(currentDay);


// handle displaying the time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDay.text(rightNow);
  }

  setInterval(displayTime, 1000);