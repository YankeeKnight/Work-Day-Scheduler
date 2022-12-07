var saveBtn = $(".saveBtn");

// TODO: Add code to display the current date in the header of the page.
$("#currentDay").text(dayjs().format('dddd MMMM D, YYYY'));


// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour.
function timeBlockColor() {
  var hour = dayjs().hour();

  $(".time-block").each(function () {
    var planHour = $(this).attr("id");

    //console.log(this);

    if (planHour > hour) {
      $(this).addClass("future");
    } else if (planHour == hour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  })
}

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage.
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements.
saveBtn.on("click", function () {
  var time = $(this).siblings(".hour").text();
  var plan = $(this).siblings(".description").val();

  localStorage.setItem(time, plan);
});

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
function usePlanner() {
  $(".hour").each(function () {
    var planHour = $(this).text();
    var currPlan = localStorage.getItem(planHour);

    if (currPlan !== null) {
      $(this).siblings(".description").val(currPlan);
    }
  });

};

timeBlockColor();
$(document).ready(usePlanner());