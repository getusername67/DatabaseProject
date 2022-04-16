
var createRSO = document.querySelector(".RSOsubmit");
var RSOname = '';
var AdminName ='';
var lines = [];
var names = [];
createRSO.addEventListener('click', e => {
    RSOname = document.getElementById('RSOName').value;
    AdminName = document.getElementById('adminName').value;
    lines = $('listMembers').val().split('\n');
    for(var i = 0;i < lines.length;i++){
        names[i] = lines[i];
    }
    if(lines.length < 4){
        alert("Too few members to create an RSO")
    }
})