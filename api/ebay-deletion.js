export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("🔔 eBay Account Deletion Notification Received:");
    console.log(JSON.stringify(req.body, null, 2));

    return res.status(200).send("OK");
  }

  return res.status(200).send("eBay Deletion Webhook Running");
}
