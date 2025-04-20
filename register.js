const RegexName = /^[a-zA-Z0-9_]{3,16}$/,
    RegexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    RegexPassword = /^(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/;
let NameInPut = document.getElementsByTagName("input")[0];
let EmailInPut = document.getElementsByTagName("input")[1];
let PasswordInPut = document.getElementsByTagName("input")[2];
let alert1 = document.getElementsByTagName("span")[0];
let alert2 = document.getElementsByTagName("span")[1];
let alert3 = document.getElementsByTagName("span")[2];

function ssubmit(e) {
    alert1.setAttribute("style", "display:none;");
    alert2.setAttribute("style", "display:none;");
    alert3.setAttribute("style", "display:none;");

    if (RegexName.test(NameInPut.value) && RegexEmail.test(EmailInPut.value) && RegexPassword.test(PasswordInPut.value)) {}
    else {
        e.preventDefault();
        if (!RegexName.test(NameInPut.value)) {
            NameInPut.value = "";
            alert1.setAttribute("style", "color:red;");
        }
        if (!RegexEmail.test(EmailInPut.value)) {
            EmailInPut.value = "";
            alert2.setAttribute("style", "color:red;");
        }
        if (!RegexPassword.test(PasswordInPut.value)) {
            PasswordInPut.value = "";
            alert3.setAttribute("style", "color:red;");
        }
    }
}