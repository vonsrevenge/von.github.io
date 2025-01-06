// Title Animation Script
const originalTitle = "Under development";
let currentTitle = "";
let index = 0;
let removing = true;

function updateTitle() {
    if (removing) {
        // Remove characters one by one
        currentTitle = originalTitle.slice(0, index);
        index--;
        if (index < 0) {
            removing = false; // Start adding characters back
            index = 1;
        }
    } else {
        // Add characters one by one
        currentTitle = originalTitle.slice(0, index);
        index++;
        if (index > originalTitle.length) {
            removing = true; // Start removing characters again
            index = originalTitle.length - 1;
        }
    }

    // Update the page title
    document.title = currentTitle;

    // Call this function repeatedly with a delay
    setTimeout(updateTitle, 200); // Adjust speed as needed
}

// Start the animation
updateTitle();
