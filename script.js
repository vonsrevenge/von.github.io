document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("text");
    const cursorElement = document.getElementById("cursor");

    const message = " Welcome to My Portfolio!"; // Text to type out
    let index = 0;

    // Typewriter function
    function type() {
        if (index < message.length) {
            textElement.textContent += message.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust typing speed
        } else {
            cursorElement.style.animation = "none"; // Stop blinking cursor after typing
        }
    }

    type(); // Start typewriter effect
});
