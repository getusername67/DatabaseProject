var getUser = document.querySelector(".createEvents");
var eventName = "";
var eventType = "";
var eventDescription = "";
var time = "";
var date = "";
var phoneNumber = "";
var email = "";

getUser.addEventListener('click', e => {
    eventName = document.getElementById('evName').value;
    eventType = document.getElementById('eventType').value;
    eventDescription = document.getElementById('desc').value;
    time = document.getElementById('eventTime').value;
    date = document.getElementById('eventDate').value;
    phoneNumber = document.getElementById('phone').value;
    email = document.getElementById('email').value;
})
