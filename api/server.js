const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.get("/api/cat/random", (req, res) => {
  const catImagesDir = path.join(__dirname, "cat-images");
  fs.readdir(catImagesDir, (err, files) => {
    if (err) {
      console.error("Error reading cat images directory", err);
      res.sendStatus(500);
    } else {
      const randomImage = files[Math.floor(Math.random() * files.length)];
      const imagePath = path.join(catImagesDir, randomImage);
      res.sendFile(imagePath);
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
