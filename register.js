var urlBase = 'http://localhost/API';
var extension = 'php';


var registerUser = document.querySelector(".register");
var username = "";
var password = "";

registerUser.addEventListener('click', e => {

    
    firstName = document.getElementById('fname').value;
    lastName = document.getElementById('lname').value;
    username = document.getElementById('userId').value;
    password = document.getElementById('password').value;
    email = document.getElementById('email').value;
    phoneNumber = document.getElementById('pn').value;

    var jsonPayload = '{ "regFirstname" : "' + firstName + '", "regLastname" : "' + lastName + '", "regUsername" : "' + username + '", "regPassword" : "' + password + '", "regPhone" : "' + phoneNumber + '", "regEmail" : "' + email + '", "regPerm" : "' + "student"+ '"}';
    var url = urlBase + '/register.' + extension;
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, false);
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

	try
	{
		xhr.send(jsonPayload);
		var jsonObject = JSON.parse(xhr.responseText);

		// if (jsonObject.error != "")
		// {
		// 	document.getElementById("register-error").innerHTML = jsonObject.error;
		// 	return;
		// }

		// document.getElementById("username").value = login;
		// document.getElementById("password").value = tempPass;
		// doLogin();
	}
	catch(err)
	{
		// document.getElementById("register-error").innerHTML = err.message;
        console.log(err.message);
	}

})
