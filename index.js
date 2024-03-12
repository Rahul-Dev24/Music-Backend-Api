const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  let data = await fetch("https://dummyjson.com/products/1")
    .then((res) => res.json())
    .then((json) => json);
  res.send(data);
});

app.listen(3000, () => {
  console.log("server is running");
});
