function procCookie() {
    var loginArray = document.cookie.split("=");
    var username = loginArray[1];
    console.log(username);
    if (username != "" && username != undefined) {
        var userDiv = document.getElementById("user");
        userDiv.style.display = "block";
        userDiv.innerHTML = "<h3><span>&#9787;</span> " + username + " </h3>";
    }
}

