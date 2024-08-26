const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
    // ...then use the .dark-theme class
    document.body.classList.add("dark-mode");
}
  