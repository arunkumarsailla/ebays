import express from "express";

const app = express();
app.use(express.json());

// eBay Deletion Webhook Endpoint
app.post("/ebay/deletion", (req, res) => {
    console.log("🔔 eBay Deletion Notification Received:");
    console.log(JSON.stringify(req.body, null, 2));

    // Always reply 200 OK so eBay marks it as verified
    res.status(200).send("OK");
});

// Root route
app.get("/", (req, res) => {
    res.send("eBay Deletion Webhook is running.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
