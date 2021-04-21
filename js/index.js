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

const date = new Date();

const renderCalendar= () => {
    date.setDate(1);

    
    const month = date.getMonth();
    const monthDays = document.querySelector('.days');
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const firstDayIndex=date.getDay();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    
    const nextDays = 7 - lastDayIndex - 1;
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    
    document.querySelector('.date h1').innerHTML
        =months[month];
    document.querySelector('.date p').innerHTML
        = new Date().toDateString();
    let days = "";
    
    for (let x = firstDayIndex; x>0;x--){
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
    }
    for (let i = 1; i <=lastDay; i++){
        if (i=== new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class ="today">${i}</div>`;
        }else{
            days += `<div>${i}</div>`;
        }
        
    }
    
    for (let j=1; j <= nextDays;j++) {
        days += `<div class = "next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
}

document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() -1);
    renderCalendar();
});

document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth()+1);
    renderCalendar();
});

renderCalendar();