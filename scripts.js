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

        // Change color of save button when user is writing new event
        $(this).find("textarea").on("input", function() {
            $(this).siblings(".saveBtn").css("background-color", "#fec3bb");
        });

        var event = localStorage.getItem(blockHour);

        // Display events in the text area if there is any 
        if (event !== null) {
            $(this).find("textarea").val(event);
        }

        $(this).find(".saveBtn").on("click", function () {
            var text = $(this).siblings("textarea").val();

            // Save event to local storage using the hour as the key
            localStorage.setItem(blockHour, text);

            // Revert change on save button's color
            $(this).css("background-color", "#06aed5");
        });

    });
  });
  