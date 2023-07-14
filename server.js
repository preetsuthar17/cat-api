const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.get("/api/cat/random", (req, res) => {
  const catImagesPath = path.join(__dirname, "cat-images");
  fs.readdir(catImagesPath, (err, files) => {
    if (err) {
      console.error("Error reading cat images:", err);
      return res.status(500).json({ error: "Failed to fetch cat image." });
    }
    const randomIndex = Math.floor(Math.random() * files.length);
    const randomImage = files[randomIndex];
    const imagePath = path.join(catImagesPath, randomImage);
    res.sendFile(imagePath);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
