document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".content-section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
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
