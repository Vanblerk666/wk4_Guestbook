// Firstly tell it to use express for a server (remember to add type; module to package.json)

import express from "express";

// make an object called app (full of apps) and tell it to use express.json

const app = express();
app.use(express.json());

// allow server comms with cors

import cors from "cors";
app.use(cors());

// set endpoint for /

app.get("/", function (request, response) {
  response.json("let's see if this mutha works");
});

//give the /message endpoint a function

app.post("/message", function (request, response) {
  response.json(request.body);
});

//check it's connected to the port

// app.listen(8080, function () {
//   console.log("running on 8080?");
// });
