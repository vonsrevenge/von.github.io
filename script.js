document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("text");
    const textToType = "Welcome to My Portfolio!";
    const typingSpeed = 100; // Typing speed in milliseconds

    let currentIndex = 0;

    function typeCharacter() {
        if (currentIndex < textToType.length) {
            textElement.textContent += textToType[currentIndex];
            currentIndex++;
            setTimeout(typeCharacter, typingSpeed);
        }
    }

    // Start typing effect
    typeCharacter();
});
