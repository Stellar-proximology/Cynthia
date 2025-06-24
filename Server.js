const express = require("express");
const fetch = require("node-fetch");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static(__dirname));
app.use(express.json());

app.post("/get-geo", async (req, res) => {
  const { location, birthdate } = req.body;
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    return res.status(400).json({ error: "Missing API Key in .env" });
  }

  try {
    const response = await fetch("https://json.freeastrologyapi.com/geo-details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey
      },
      body: JSON.stringify({ location })
    });

    const geoData = await response.json();
    res.json({ location, birthdate, geo: geoData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
