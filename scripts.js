// Show Current day and date on jumbotrun
$("#currentDay").html(moment().format('dddd, MMM Do'));

$(document).ready(function() {
    // Get the current hour in 24-hour format
    var currentHour = moment().hour();
  
    // Loop through each timeblock
    $(".time-block").each(function() {
      // Get the hour for this timeblock
      var blockHour = parseInt($(this).attr("data-hour"));
  
      // Add the appropriate class based on the current time
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  });
  