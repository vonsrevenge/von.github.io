document.addEventListener("DOMContentLoaded", async () => {
    const textElement = document.getElementById("text");
    const textToType = "Welcome to My Portfolio!";
    const typingSpeed = 100;
    const updateBatch = 3;
    let currentIndex = 0;
    const startTime = Date.now();

    function typeCharacter() {
        const nextIndex = currentIndex + updateBatch;
        textElement.textContent += textToType.slice(currentIndex, nextIndex);
        currentIndex = nextIndex;

        if (currentIndex < textToType.length) {
            setTimeout(typeCharacter, typingSpeed);
        }
    }

    typeCharacter();

    try {
        // Step 1: IP Address
        const ipRes = await fetch("https://api64.ipify.org?format=json");
        const ipData = await ipRes.json();
        const ip = ipData.ip || "Unknown";

        // Step 2: Location Info (ipapi)
        const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
        const geoData = await geoRes.json();
        const city = geoData.city || "Unknown";
        const region = geoData.region || "Unknown";
        const country = geoData.country_name || "Unknown";
        const org = geoData.org || "Unknown";

        // Step 3: FingerprintJS
        const fp = await FingerprintJS.load();
        const result = await fp.get();
        const visitorId = result.visitorId || "Unknown";
        const confidence = result?.confidence?.score || "Unknown";

        // Step 4: System Info
        const browser = navigator.userAgent || "Unknown";
        const platform = navigator.platform || "Unknown";
        const screenRes = `${window.screen.width}x${window.screen.height}`;
        const dpr = window.devicePixelRatio || 1;
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown";
        const language = navigator.language || "Unknown";
        const page = window.location.href;
        const referrer = document.referrer || "Direct";
        const duration = Math.round((Date.now() - startTime) / 1000); // seconds
        const deviceType = /Mobi|Android/i.test(navigator.userAgent) ? "Mobile" : "Desktop";

        // Step 5: Build and Send
        const message = {
            content:
`📩 **New Visitor Logged**
🧭 **IP:** ${ip} (${org})
🌍 **Location:** ${city}, ${region}, ${country}
🆔 **Visitor ID:** ${visitorId}
🎯 **Confidence Score:** ${confidence}
🖥️ **Device:** ${deviceType}
🌐 **Browser:** ${browser}
💻 **Platform/OS:** ${platform}
📐 **Screen:** ${screenRes} @${dpr}x
🕰️ **Timezone:** ${timezone}
🗣️ **Language:** ${language}
📄 **Page:** ${page}
🔗 **Referrer:** ${referrer}
⏱️ **Time on Site:** ${duration}s`
        };

        await fetch("https://fifth-wirehaired-sunset.glitch.me/log-visitor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        });

        console.log("✅ Visitor data sent to backend.");
    } catch (err) {
        console.error("❌ Failed to collect/send visitor data:", err);
    }
});
