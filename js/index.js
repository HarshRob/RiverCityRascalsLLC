const _aboutUs = document.getElementById("aboutus");
const _eventCalendar = document.getElementById("eventcalendar");
const _pricingAvailability = document.getElementById("pricingavailability");
const _aboutUsTab = document.getElementById("aboutUsTab");
const _eventCalendarTab = document.getElementById("eventCalendarTab");
const _pricingAvailabilityTab = document.getElementById("pricingAvailabilityTab");
const _eventInput = document.getElementById('eventInput');

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

//carousel and modals
const _calendarDays = document.querySelector('.days div');


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

const loginEmail = document.querySelector('#loginEmail');
const loginPassword = document.querySelector('#loginPassword');
const signIn = document.querySelector('#signIn');

signIn.addEventListener("click", loginAuthentication);

const validUsernames = ['admin', 'parent']
const validPasswords = ['test', 'temp']


function loginAuthentication() {
    const username = loginEmail.value;
    const password = loginPassword.value;
    const usernameIndex = validUsernames.indexOf(username)
    if(validUsernames.includes(username) && validPasswords[usernameIndex] === password) {
        console.log(username);
        loginUser();
    }
}

function loginUser() {
    document.querySelector('#loginButton').style.display = 'none';
    document.querySelector('#signoutButton').style.display = 'block';
}

function signOut() {
    document.querySelector('#loginButton').style.display = 'block';
    document.querySelector('#signoutButton').style.display = 'none';
}


//check if valid inputs
//user is logged in