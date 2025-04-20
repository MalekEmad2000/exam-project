const username = document.getElementById("username"),
    password = document.getElementById("password");
document.getElementsByTagName("span")[0].setAttribute("style", "display:none;");
document.getElementsByTagName("span")[1].setAttribute("style", "display:none;");

let LoggedUserName = location.search.split("&")[0].split("=")[1];
let LoggedUserPass = location.search.split("&")[2].split("=")[1];




function LogIn(e) {
    if (LoggedUserName === username.value && LoggedUserPass === password.value) { }
    else {
        e.preventDefault();
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