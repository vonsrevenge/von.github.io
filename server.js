// server.js
const express = require("express");
const fetch = require("node-fetch");
const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/log-visitor", async (req, res) => {
    const webhookUrl = "https://discord.com/api/webhooks/1385635781434937424/LRV8v5TBSzwJkNrdOtXWapcHYBI9UZTmqgFFIeQCHnt0zptn5Io1TA1kyzezcfkEBFEt";

    try {
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req.body)
        });

        if (!response.ok) {
            console.error("Discord webhook failed:", await response.text());
            return res.status(500).send("Failed to send to Discord.");
        }

        res.status(200).send("Logged successfully.");
    } catch (err) {
        console.error("Error in backend:", err);
        res.status(500).send("Server error.");
    }
});

app.listen(PORT, () => {
    console.log(`Visitor logger running at http://localhost:${PORT}`);
});
