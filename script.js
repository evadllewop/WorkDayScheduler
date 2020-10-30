
var timeBlocks = $(".time-block");
var currentDay = $("#currentDay");

// set variables for day and time
var currentDate = moment().format("dddd, MMMM Do YYYY");
var currentHour = moment().format("H");

// add current date to jumbotron
currentDay.text(currentDate);

// get event description and time on button click
$(".saveBtn").on("click", function () {

    var eventDes = $(this).siblings(".description").val().trim();
    var eventTime = $(this).parent().attr("id");
    // console.log(this);

    // save in localStorage
    localStorage.setItem(eventTime, eventDes);
});

// style timeBlocks according to past, present or future times
function styleTimeBlocks() {

    // check each timeBlock for time of day
    $(".time-block").each(function () {
        var thisBlockHr = parseInt($(this).attr("id").split("-")[1]);

        // add and remove color classes
        if (thisBlockHr == currentHour) {
            $(this).addClass("present").removeClass("past future");
        }
        if (thisBlockHr < currentHour) {
            $(this).addClass("past").removeClass("present future");
        }
        if (thisBlockHr > currentHour) {
            $(this).addClass("future").removeClass("past present");
        }
    });
}

styleTimeBlocks();

// load saved data from localStorage
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
