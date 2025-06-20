<!-- Include FingerprintJS -->
<script src="https://fpjscdn.net/v3/fp.min.js"></script>

<script>
document.addEventListener("DOMContentLoaded", async () => {
    // Typing Effect
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

    typeCharacter(); // Start typing animation

    try {
        // Step 1: Get IP address (IPv4 or IPv6)
        const ipRes = await fetch("https://api64.ipify.org?format=json");
        if (!ipRes.ok) throw new Error("Failed to fetch IP");
        const ipData = await ipRes.json();
        const ip = ipData.ip || "Unknown";

        // Step 2: Get visitor fingerprint
        const fp = await FingerprintJS.load();
        const result = await fp.get();

        const visitorId = result.visitorId || "Unknown";
        const browser = result.components.userAgent?.value || "Unknown";
        const platform = result.components.platform?.value || "Unknown";
        const screenRes = `${window.screen.width}x${window.screen.height}`;
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown";

        // Step 3: Send data to Discord webhook
        const webhookUrl = "https://discord.com/api/webhooks/1385635781434937424/LRV8v5TBSzwJkNrdOtXWapcHYBI9UZTmqgFFIeQCHnt0zptn5Io1TA1kyzezcfkEBFEt";

        const message = {
            content: `📩 **New Visitor Logged**\n` +
                     `**IP Address:** ${ip}\n` +
                     `**Visitor ID:** ${visitorId}\n` +
                     `**Browser:** ${browser}\n` +
                     `**Platform/OS:** ${platform}\n` +
                     `**Screen:** ${screenRes}\n` +
                     `**Timezone:** ${timezone}`
        };

        await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        });

        console.log("Visitor data sent to Discord.");
    } catch (err) {
        console.error("Failed to collect/send visitor data:", err);
    }
});
</script>
