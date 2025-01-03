const body = document.body;
const themeToggle = document.getElementById("theme-toggle");

// Add event listener to toggle the theme
themeToggle.addEventListener("click", () => {
    body.classList.add("transition");

    // Use a timeout to delay the removal of the class after the animation
    setTimeout(() => {
        body.classList.toggle("dark");
        body.classList.remove("transition");
    }, 500);
});
