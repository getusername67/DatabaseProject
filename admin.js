var getUser = document.querySelector(".login");
var username = "";
var password = "";

getUser.addEventListener('click', e => {
    username = document.getElementById('userId').value;
    password = document.getElementById('password').value;
})
