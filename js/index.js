const _aboutUs = document.getElementById("aboutus");
const _eventCalendar = document.querySelector("#eventcalendar");
const _pricingAvailability = document.getElementById("pricingavailability");

console.log(_aboutUs);
//onclick functions to open the respective tabs
function aboutUs() {
    if(_aboutUs.style.display === "none") {
        _aboutUs.style.display = "block";
        _eventCalendar.style.display = "none";
        _pricingAvailability.style.display = "none";
        _aboutUs.classList.add('active')
        _eventCalendar.classList.remove('active')
        _pricingAvailability.classList.remove('active')

    }
}

function eventCalendar() {
    if(_eventCalendar.style.display === "none") {
        _aboutUs.style.display = "none";
        _eventCalendar.style.display = "block";
        _pricingAvailability.style.display = "none";
        _aboutUs.classList.remove('active')
        _eventCalendar.classList.add('active')
        _pricingAvailability.classList.remove('active')
    }
}

function pricingAvailability() {
    if(_pricingAvailability.style.display === "none") {
        _aboutUs.style.display = "none";
        _eventCalendar.style.display = "none";
        _pricingAvailability.style.display = "block";
        _aboutUs.classList.remove('active')
        _eventCalendar.classList.remove('active')
        _pricingAvailability.classList.add('active')
    }
}