const _aboutUs = document.getElementById("aboutus");
const _eventCalendar = document.getElementById("eventcalendar");
const _pricingAvailability = document.getElementById("pricingavailability");
const _aboutUsTab = document.getElementById("aboutUsTab");
const _eventCalendarTab = document.getElementById("eventCalendarTab");
const _pricingAvailabilityTab = document.getElementById("pricingAvailabilityTab");

//onclick functions to open the respective tabs
function aboutUs() {
    if(_aboutUs.style.display === "none" || _aboutUs.style.display === "") {
        _aboutUs.style.display = "block";
        _eventCalendar.style.display = "none";
        _pricingAvailability.style.display = "none";
        _aboutUsTab.classList.add('active')
        _eventCalendarTab.classList.remove('active')
        _pricingAvailabilityTab.classList.remove('active')
    }
}

function eventCalendar() {
    if(_eventCalendar.style.display === "none" || _eventCalendar.style.display === "") {
        _aboutUs.style.display = "none";
        _eventCalendar.style.display = "block";
        _pricingAvailability.style.display = "none";
        _aboutUsTab.classList.remove('active')
        _eventCalendarTab.classList.add('active')
        _pricingAvailabilityTab.classList.remove('active')
    }
}

function pricingAvailability() {
    if(_pricingAvailability.style.display === "none" || _pricingAvailability.style.display === "") {
        _aboutUs.style.display = "none";
        _eventCalendar.style.display = "none";
        _pricingAvailability.style.display = "block";
        _aboutUsTab.classList.remove('active')
        _eventCalendarTab.classList.remove('active')
        _pricingAvailabilityTab.classList.add('active')
    }
}

$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });

    $("#loginButton").click(function(){
        $('#loginModal').modal('show');
    })
});