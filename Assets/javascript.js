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
        { time: 13, input: "" },
        { time: 14, input: "" },
        { time: 15, input: "" },
        { time: 16, input: "" },
        { time: 17, input: "" },
       
    ]

    // var workHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    function displayTime(time) {
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
    //Show Hours on the DOM
    function printInputBlocks() {
        for (let i = 0; i < timeInputs.length; i++) {
            console.log(timeInputs[i].time, timeInputs[i].input);
            var inputGroup = $('<div class="input-group mb-3">');
            var inputGroupPrepend = $('<div class="input-group-prepend">');
            var prependSpan = $('<span class="input-group-text">' + timeInputs[i].time + ':00' + '</span>');
            inputGroupPrepend.append(prependSpan);
            var inputEl = $('<input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" value="' + timeInputs[i].input + '">');
            var inputGroupAppend = $('<div class="input-group-append">');
            var appendSpan = $('<span data-time="" class="input-group-text"><button>Save</button></span>');
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
})

   
           
          





    function compareTime() {
        var nowTime = parseInt(moment().format('HH'));
        //Start from 9AM, till 5PM
        for (time = 9; time >= 17; time++) {
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
    //     compareTime();
    // printTime();
    
    