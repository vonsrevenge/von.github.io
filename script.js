document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

document.getElementById("contact-form").addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thank you for your message!");
});
