const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());

app.get("/proxy", async (req, res) => {
  try {
    const response = await axios.get(
      "https://indian-railway-api.cyclic.app/trains/betweenStations/?from=NGP&to=MTY"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from the API" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
