// Title Animation Script
const originalTitle = "Under development";
const siteName = "vonsrevenge.dev"; // Fallback for suggestions
let currentTitle = "U"; // Start with the first letter
let index = 1;
let removing = true;

function updateTitle() {
    if (removing) {
        // Remove characters one by one, but stop at the first letter ("U")
        currentTitle = originalTitle.slice(0, index);
        index--;
        if (index < 1) {
            removing = false; // Start adding characters back
            index = 2; // Start adding back after "U"
        }
    } else {
        // Add characters one by one
        currentTitle = originalTitle.slice(0, index);
        index++;
        if (index > originalTitle.length) {
            removing = true; // Start removing characters again
            index = originalTitle.length;
        }
    }

    // Update the page title
    document.title = `${currentTitle}`;

    // Call this function repeatedly with a delay
    setTimeout(updateTitle, 200); // Adjust speed as needed
}

// Start the animation
updateTitle();
