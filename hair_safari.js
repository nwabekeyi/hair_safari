// Display and update the current date and time in the header
var currentDateTimeElement = document.getElementById("currentDateTime");

function updateDateTime() {
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var dayOfWeekNumber = currentDate.getDay();
    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var dayName = dayNames[dayOfWeekNumber];
    var formattedTimeDate = dayName + ' ' + hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    currentDateTimeElement.innerHTML = formattedTimeDate;
}

setInterval(updateDateTime, 1000);
updateDateTime();

// Grid animation

$(document).ready(function () {
    $(".image-container").hover(
        function () {
            $(this).append("<div class='hover-text'>The features goes here</div>").css({
                'transform': 'scale(1.2)',
                'transition': 'transform 1s ease-out',
                'color': 'goldenrod',
                'text-shadow': '2%',
                'opacity': '0.8'
            });
        },
        function () {
            $(this).find('.hover-text').remove();
            $(this).css({
                'transform': 'scale(1)',
                'transition': 'transform 1s ease-out',
                'opacity': '1'
            });
          });
        });
        //Toggle buger menu in small screen size
        $(document).ready(function () {
            function updateNavigation() {
                        $('.burger-menu').click(function(){
                          $('#small-screen').slideToggle("slow");
                        });
                      }; 
                      updateNavigation();
                      $(window).resize(function () {
                        updateNavigation();
                    });
        });           
        