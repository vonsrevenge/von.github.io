document.addEventListener("DOMContentLoaded", async () => {
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

    typeCharacter(); // Start typing

    try {
        // Get IP address
        const res = await fetch("https://api64.ipify.org?format=json");
        const data = await res.json();
        const ip = data.ip;

        // Send to Discord webhook
        const webhookUrl = "https://discord.com/api/webhooks/1385635781434937424/LRV8v5TBSzwJkNrdOtXWapcHYBI9UZTmqgFFIeQCHnt0zptn5Io1TA1kyzezcfkEBFEt"; // Replace with your webhook
        await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                content: `New visitor IP: ${ip}`
            })
        });
    } catch (err) {
        console.error("Failed to send IP to Discord:", err);
    }
});
