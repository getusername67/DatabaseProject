var studentLogin = document.querySelector(".studentLogin");
var username = "";
var password = "";

studentLogin.addEventListener('click', e => {
    username = document.getElementById('userId').value;
    password = document.getElementById('password').value;
})
