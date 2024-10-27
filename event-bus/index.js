const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// const cors = require('cors')
const axios = require("axios");

app.use(bodyParser.json());
// app.use(cors());

const { randomBytes } = require("crypto");

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  //posts
  axios.post("http://localhost:4000/events", event).catch((err) => {
    console.log(err.message);
  });

  //comments
  axios.post("http://localhost:4001/events", event).catch((err) => {
    console.log(err.message);
  });

  //query
  axios.post("http://localhost:4002/events", event).catch((err) => {
    console.log(err.message);
  });

  //moderation
  axios.post("http://localhost:4003/events", event).catch((err) => {
    console.log(err.message);
  });

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log(`listening on PORT 4005`);
});
