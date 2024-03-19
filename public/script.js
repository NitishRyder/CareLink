function movetoUserLogin(){
    window.location.href = "/userlogin";   
}

function movietoCareTakerLogin(){
    window.location.href = "/caretakerlogin";
}

function movetoUserPage(){
    window.location.href = "/userHome";
}

function hire(){
    window.location.href = "/hireCaretaker"
}

function dispCareTakerDetails(){
    window.location.href = "/careTakerDetails"
}

function move2CareTakerHome(){
    window.location.href = "/careTakeHome"
}

function dispCareTaker(){
    window.location.href = "/careTakerDetails"
}

function moveToCTaccept(){
    window.location.href = '/bookingAccepted';
}

function moveToCTreject(){
    window.location.href = '/bookingRejected';
}

function rejectReasonSubmit(){
    window.location.href = '/rejectedReason'
}

function appliedState(){
    window.location.href = '/appliedForCertification'
}

var viewBTN = document.getElementById("viewBTN");
viewBTN.addEventListener("click",()=>{
    var pwdField = document.getElementById("password");
    var toggler = document.getElementById("viewBTN");

    if(pwdField.type==="password"){
        pwdField.type="text";
        toggler.textContent = "hide";
    }
    else{
        pwdField.type="password";
        toggler.textContent = "view";
    }
});


