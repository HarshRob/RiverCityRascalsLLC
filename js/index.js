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
        _aboutUsTab.classList.add('active')
        _eventCalendarTab.classList.remove('active')
    }
}

function eventCalendar() {
    if(_eventCalendar.style.display === "none" || _eventCalendar.style.display === "") {
        _aboutUs.style.display = "none";
        _eventCalendar.style.display = "block";
        _aboutUsTab.classList.remove('active')
        _eventCalendarTab.classList.add('active')
    }
}



//carousel and modals

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
    $("#pricingAvailabilityTab").click(function(){
        $('#pricingModal').modal('show');
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

const numKids = document.getElementById('numKids');
const agesDiv = document.getElementById('ages');
const submitBtn = document.getElementById('submitBtn');

const priceArray = [700, 650, 600];
let numSubmits = 1;

submitBtn.addEventListener("click", checkPrice); 
numKids.addEventListener("keyup", makeAgeInputs);

function makeAgeInputs () {
    agesDiv.innerHTML = "";
    let input = document.createElement('input');
    for(let i = 0; i < numKids.value; i++) {
        input.id = "age" + i;
        input.placeholder = "Age of kid" + " " + (i+1);
        input.style.margin = ".1em";
        agesDiv.append(input);
        input = document.createElement('input');
    }
}


function checkPrice () {
    let price = 0;
    for(let i = 0; i< numKids.value; i++) {
            
        if(document.getElementById("age"+i).value < 2) {
            price += priceArray[0];
        }else if(document.getElementById("age"+i).value > 6) {
            price += priceArray[2];
        } else {
            price += priceArray[1];
        }
    }
    if(numKids.value > 1){
        price *= .8; 
    }
    let para = document.createElement('P');
    para.style.fontSize = "1.2em";
    para.style.margin = ".5em";
    para.innerText = "The estimated cost is $" + price;
    agesDiv.append(para);
    console.log(price);
}
