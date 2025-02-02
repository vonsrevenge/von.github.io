document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("text");
    const textToType = "Welcome to My Portfolio!";
    const typingSpeed = 100;
    const updateBatch = 3;

    let currentIndex = 0;

    function typeCharacter() {
        const nextIndex = currentIndex + updateBatch;
        textElement.textContent += textToType.slice(currentIndex, nextIndex);
        currentIndex = nextIndex;

        if (currentIndex < textToType.length) {
            setTimeout(typeCharacter, typingSpeed);
        }
    }

    // Start typing effect
    typeCharacter();
});

// Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
// Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
if (
e.keyCode === 123 || // F12
ctrlShiftKey(e, 'I') || // Ctrl + Shift + I
ctrlShiftKey(e, 'J') || // Ctrl + Shift + J
ctrlShiftKey(e, 'C') || // Ctrl + Shift + C
(e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) // Ctrl + U
) {
return false;
}
};
