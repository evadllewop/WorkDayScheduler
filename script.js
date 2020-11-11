
// here we set a variable to give us access to the "currentDay" id in the jumbotron header. We will use this later to add the text value of the current day's date into the <p> tag of the jumbotron.
var currentDay = $("#currentDay");

// here we use moment.js and create a variable that stores the value of the current date. It is then formatted to display the day of the week, month, calendar day and year. 
var currentDate = moment().format("dddd, MMMM Do YYYY");
// here we use moment.js and create a variable that stores the value of the current hour. It is then formatted to display the 24h hour. This will later be used to style the time-block rows according to the time of day.
var currentHour = moment().format("H");

// we use the "currentDay" variable to access the id and <p> tag in the jumbotron and assign it the "currentDate" text values.
currentDay.text(currentDate);

// we create a function that holds the code that will be necessary to style each time-block row according to the time of day using classes from our external stylesheet.
function styleTimeBlocks() {

    // here we access each "time-block" class and create an anonymous function that will hold the code that will style each time-block row according to the current time of day.
    $(".time-block").each(function () {

        // here we set a variable that we can use to store the value of the hour of day for each time-block row.
        // we use the pareseInt function to reference each time block using "this", target the "id" (ex. "hour-9") for the hour and use .split to remove the "-" from the id name. It then takes what's leftover ("9") and parses the string into an integer.

        var thisBlockHr = parseInt($(this).attr("id").split("-")[1]);

        // this uses an if statement to check if our current hour variable is equal to the current hour. If it is true, we add the "present" class from our external stylesheet and remove the "past" "future" classes.
        if (thisBlockHr == currentHour) {
            // this turns the time-block red
            $(this).addClass("present").removeClass("past future");
        }
        // this uses an if statement to check if our current hour variable is less than the current hour. If it is true, we add the "past" class from our external stylesheet and remove the "present" and "future" classes.
        if (thisBlockHr < currentHour) {
            // this turns the time-block grey
            $(this).addClass("past").removeClass("present future");
        }
        // this uses an if statement to check if our current hour variable is greater than the current hour. If it is true, we add the "future" class from our external stylesheet and remove the "past" and "present" classes.
        if (thisBlockHr > currentHour) {
            // this turns the time-block green
            $(this).addClass("future").removeClass("past present");
        }
    });
}

// this will call the styleTimeBlocks function to style the time-blocks
styleTimeBlocks();

// this line of code targets the <button> with a "saveBtn" class in each "time-block" row. It then listens for the button click and executes an anonymous function that will then collect the code that is required to retrieve and save the user input value of the "description" textarea and the hour of day that the input was saved.
$(".saveBtn").on("click", function () {

    // this code targets the "saveBtn" class from each <button> div and then checks for a sibling class named "description" within each "time-block" div that the "saveBtn" is included in. It then collects the value of the "description" textarea input and trims it. The .trim() function excludes any unwanted spaces from the user's input.

    var eventDesc = $(this).siblings(".description").val().trim();

    // this code targets the "saveBtn" class from each <button> div and then checks for a parent ID named "id". It then collects the hour of day ("hour-9, etc.") that is attributed to each "time-block" row. 

    var eventTime = $(this).parent().attr("id");


    // this line of code takes the textarea "description" input and hour of day value, and sets them as an arguments in the "setItem" function. localStore.setItem() stores those arguments into the user's local storage. This is saved across browser sessions until cleared.
    localStorage.setItem(eventTime, eventDesc);
});

// these lines of code return the "description" input values from each "time-block" row along with the time of day that they were entered and saved into local storage. This is saved across browser sessions until cleared.
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));