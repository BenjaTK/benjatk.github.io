
var btn = document.getElementById("dark-mode-button");

var currentThemeLocal = localStorage.getItem("theme");

if (currentThemeLocal == "dark") {
    var checkbox = document.querySelector(".dark-mode-checkbox");
    checkbox.checked = true;
}


// Listen for a click on the button
btn.addEventListener("click", function() {
    // Then toggle (add/remove) the .dark-theme class to the body
    document.body.classList.toggle("dark-mode");
    let theme = "light";
    // If the body contains the .dark-theme class...
    if (document.body.classList.contains("dark-mode")) {
        // ...then let's make the theme dark
        theme = "dark";
    }
    // Then save the choice in localStorage
    localStorage.setItem("theme", theme);

});

