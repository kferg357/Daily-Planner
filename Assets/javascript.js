
var currentDay = $('#time-display');
$(".lead").text(currentDay);
//  displaying the time
function displayTime() {
  var rightNow = moment().format('dddd, MMM DD, YYYY, h:mm');
  currentDay.text(rightNow);
}
setInterval(displayTime, 1000);

$(document).ready(function () {

  var currentHour = moment().hours();
  var todaysDate = moment().format("dddd, MMMM Do YYYY");
  console.log(currentHour);
  //Create Variable with the hours.
  var timeInputs = [
    { time: 7, input: "" },
    { time: 8, input: "" },
    { time: 9, input: "" },
    { time: 10, input: "" },
    { time: 11, input: "" },
    { time: 12, input: "" },
    { time: 13, input: "" },
    { time: 14, input: "" },
    { time: 15, input: "" },
    { time: 16, input: "" },
    { time: 17, input: "" },

  ]

  function convertTime(time) {
    if (time > 12) {
      return time - 12
    } else {
      return time
    }
  }



  //Show Today's date on the DOM
  function printTime() {
    $("#currentDay").text(todaysDate);
  }
  printTime();

  //hours on the DOM
  function printInputBlocks() {
    for (let i = 0; i < timeInputs.length; i++) {
      var convertedTime = convertTime(timeInputs[i].time)
      console.log(timeInputs[i].time, timeInputs[i].input);
      var inputGroup = $('<div class="input-group mb-3">');
      var inputGroupPrepend = $('<div class="input-group-prepend">');
      var prependSpan = $('<span class="input-group-text">' + convertedTime + ':00' + '</span>');
      prependSpan.attr("id", convertedTime);
      inputGroupPrepend.append(prependSpan);
      var inputEl = $('<input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" value="' + timeInputs[i].input + '">');
      var inputGroupAppend = $('<div class="input-group-append">');
      var appendSpan = $('<span data-time="" class="input-group-text btn"><button>Save</button></span>');
      inputGroupAppend.append(appendSpan);
      inputGroup.append(inputGroupPrepend).append(inputEl).append(inputGroupAppend);
      var nowTime = parseInt(moment().format("H"));
      console.log("nowTime: " + nowTime)
      if (timeInputs[i].time < nowTime) {
        inputGroup.addClass("past");
      } else if (timeInputs[i].time > nowTime) {
        inputGroup.addClass("future");
      } else {
        inputGroup.addClass("present");
      }
      $(".container").append(inputGroup);
    }
  }
  printInputBlocks();



  // Setting Information in Local storage
  $('.btn').on('click', function (event) {
    console.log("Save Clicked");
    console.log(event.target);
    var id = $(this).parent().siblings('.input-group-prepend').children('.input-group-text').attr('id');
    console.log(id);
    let userData = $(this).parent().siblings(".form-control").val();
    console.log(userData);

    // captutr the 'KEY' you want to associate
    localStorage.setItem(id, userData);
    
    let temp = localStorage.getItem(id);
    console.log(temp, 'TEMP');
    console.log(localStorage, 'localStorage')

  });

  $("#7").parent().parent().children("input").val(localStorage.getItem("7"));
  $("#8").parent().parent().children("input").val(localStorage.getItem("8"));
  $("#9").parent().parent().children("input").val(localStorage.getItem("9"));
  $("#10").parent().parent().children("input").val(localStorage.getItem("10"));
  $("#11").parent().parent().children("input").val(localStorage.getItem("11"));
  $("#12").parent().parent().children("input").val(localStorage.getItem("12"));
  $("#1").parent().parent().children("input").val(localStorage.getItem("1"));
  $("#2").parent().parent().children("input").val(localStorage.getItem("2"));
  $("#3").parent().parent().children("input").val(localStorage.getItem("3"));
  $("#4").parent().parent().children("input").val(localStorage.getItem("4"));
  $("#5").parent().parent().children("input").val(localStorage.getItem("5"));
})



function compareTime() {
  var nowTime = parseInt(moment().format('HH'));
  //Start from 9AM, till 5PM
  for (time = 7; time >= 17; time++) {
    var timeBlock = parseInt($("#" + time + "hr").attr("data-index"));
    console.log(timeBlock);
    if (timeBlock < nowTime) {
      $("#" + time + "hr").addClass("past");
    } else if (timeBlock == nowTime) {
      $("#" + time + "hr").addClass("present");
    } else if (timeBlock > nowTime) {
      $("#" + time + "hr").addClass("future");
    }
  }
}
compareTime();
