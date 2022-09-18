function  formValidate() {
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var phone = document.getElementById("phone").value;
var firstName = document.getElementById("firstName").value;
var Surname = document.getElementById("Surname").value;
var error = document.getElementById("error");
var text = "";

// error.style.backgroundColor ="black";

 if (email.indexOf("@") == -1 || email.length < 10) {
    text ="Please Enter Valid email";
    error.innerHTML = text;
    return false;

 }else if(password.length < 11 ) {
    text = "Please Enter Valid password";
    error.innerHTML = text;
    return false;
 
}else if (phone.length != 11 || isNaN(phone)) {
    text ="Please Enter Valid phone";
    error.innerHTML = text;
    return false;

}else if(firstName.length < 7 ) {
    text = "Please Enter Valid firstName";
    error.innerHTML = text;
    return false;
 
}else if (Surname.length < 7 ) {
    text ="Please Enter Valid Surname";
    error.innerHTML = text;
    return false;

}
else {
    alert("Done");
    return true;
}

}

function formValidate1() {
    var firstName = document.getElementById("firstName").value;
    var Surname = document.getElementById("Surname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");
    var text = "";

    if (email.indexOf("@") == -1 || email.length < 10) {
        text ="Please Enter Valid email";
        error.innerHTML = text;
        return false;
    
     }else if(password.length < 11 ) {
        text = "Please Enter Valid password";
        error.innerHTML = text;
        return false;
    
    }else if(firstName.length < 7 ) {
        text = "Please Enter Valid firstName";
        error.innerHTML = text;
        return false;
     
    }else if (Surname.length < 7 ) {
        text ="Please Enter Valid Surname";
        error.innerHTML = text;
        return false;
    
    }
    else {
        alert("Done");
        return true;
    }
    
    }



