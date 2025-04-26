const username = document.getElementById("username"),
    password = document.getElementById("password");
document.getElementsByTagName("span")[0].setAttribute("style", "display:none;");
document.getElementsByTagName("span")[1].setAttribute("style", "display:none;");

let LoggedUserName = localStorage.getItem('name');
let LoggedUserPass =  localStorage.getItem('password');



function LogIn(e) {
    e.preventDefault();
    if (LoggedUserName === username.value && LoggedUserPass === password.value) { 

        location.replace("exam.html");
    }
    else {
        document.getElementsByTagName("span")[0].setAttribute("style", "display:none;");
        document.getElementsByTagName("span")[1].setAttribute("style", "display:none;");
        if (LoggedUserName !== username.value) {
            document.getElementsByTagName("span")[0].setAttribute("style", "color:red;");
        }
        if (LoggedUserPass !== password.value) {
            document.getElementsByTagName("span")[1].setAttribute("style", "color:red;");
        }
    }
}