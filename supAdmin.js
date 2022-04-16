var supAdminlog = document.querySelector(".supAdminLogin");
var username = "";
var password = "";

supAdminlog.addEventListener('click', e => {
    username = document.getElementById('userId').value;
    password = document.getElementById('password').value;
})
