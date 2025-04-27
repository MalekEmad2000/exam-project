const RegexName = /^[a-zA-Z0-9_]{3,16}$/,
    RegexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    RegexPassword = /^(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/;

let NameInPut = document.getElementById("name");
let EmailInPut = document.getElementById("email");
let PasswordInPut = document.getElementById("password");

let alert1 = document.querySelectorAll("span")[0];
let alert2 = document.querySelectorAll("span")[1];
let alert3 = document.querySelectorAll("span")[2];

function ssubmit(e) {
    e.preventDefault();
    alert1.style.display = "none";
    alert2.style.display = "none";
    alert3.style.display = "none";

    if (RegexName.test(NameInPut.value) && RegexEmail.test(EmailInPut.value) && RegexPassword.test(PasswordInPut.value)) {
        localStorage.setItem('name', NameInPut.value);
        localStorage.setItem('password', PasswordInPut.value);
        location.replace("login.html");
    } else {
        if (!RegexName.test(NameInPut.value)) {
            NameInPut.value = "";
            alert1.style.display = "block";
            alert1.style.color = "red";
        }
        if (!RegexEmail.test(EmailInPut.value)) {
            EmailInPut.value = "";
            alert2.style.display = "block";
            alert2.style.color = "red";
        }
        if (!RegexPassword.test(PasswordInPut.value)) {
            PasswordInPut.value = "";
            alert3.style.display = "block";
            alert3.style.color = "red";
        }
    }
}

