const express = require("express");
const bodyParser = require("body-parser");
const Pusher = require("pusher");

const app = express();

app.use(bodyParser.json());

const pusherKeys = require("./src/config/pusher_keys");

const pusher = new Pusher(pusherKeys);

//app.put("/")

app.post("/api/v0/send", (req, res) => {
  const { sender, receiver} = req.body;
  const message = req.body;
  console.log(req.body);
  pusher.trigger(receiver, "message", {
    message
  });
  res.status(204).send("message sent");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server runs in port", PORT);
});
