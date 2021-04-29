// var currentDay = ('April 28th, 2021');
var currentDay = $('#time-display');
$(".lead").text(currentDay);


// handle displaying the time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDay.text(rightNow);
  }

  setInterval(displayTime, 1000);


  //
  $(document).ready(function () {
    // var timeInputs = JSON.parse(localStorage.getItem('timeInputs')) || {};
    var currentHour = moment().hours();
    var todaysDate = moment().format("dddd, MMMM Do YYYY");
    console.log(currentHour);
    //Create Variable with the hours.
    var timeInputs = [
        { time: 7, input: "Wake up" },
        { time: 8, input: "" },
        { time: 9, input: ""  },
        { time: 10, input: "" },
        { time: 11, input: "Go to work" },
        { time: 12, input: "" },
        { time: 1, input: "" },
        { time: 2, input: "" },
        { time: 3, input: "" },
        { time: 4, input: "" },
        { time: 5, input: "" },
       
   