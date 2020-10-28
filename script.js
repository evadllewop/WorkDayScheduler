
var timeBlocks = $(".time-block");
var currentDay = $("#currentDay");

var currentDate = moment().format("dddd, MMMM Do YYYY");
var currentHour = moment().format("H");

currentDay.text(currentDate);

// $(document).ready(function () {
// listen for save button clicks
$(".saveBtn").on("click", function () {
    // get nearby values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save in localStorage
    localStorage.setItem(time, value);
});

function styleTimeBlocks() {

    // set styles of timeblocks depending on time of day
    $(".time-block").each(function () {
        var thisBlockHr = parseInt($(this).attr("id").split("-")[1]);

        // check if we've moved past this time
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


