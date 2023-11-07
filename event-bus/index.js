const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// const cors = require('cors')
const axios = require('axios')


app.use(bodyParser.json());
// app.use(cors());

const { randomBytes } = require("crypto");

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:4000/events", event);
  axios.post("http://localhost:4001/events", event);
  axios.post("http://localhost:4002/events", event);

  res.send({ status: "OK" });
});

app.listen(4005, () => {
  console.log(`listening on PORT 4005`);
});
