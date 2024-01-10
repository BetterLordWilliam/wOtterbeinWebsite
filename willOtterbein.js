// SETUP
const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');

// App Stuff Cont.
const app = express();

// Resource paths.
app.use("/js", express.static("./public/scripts"));
app.use("/css", express.static("./public/css"));
app.use("/img", express.static("./public/images"));
app.use("/fonts", express.static("./public/fonts"));

// ---------------------------------------------------------
// Function to handle HTML snippet requests from the client.
// ---------------------------------------------------------
app.get("/hsnip", function(req, res) {
  let formatOfReq = req.query["format"];
  let toSend;

  // Get navbar html.
  if (formatOfReq == "nav") {        
    toSend = fs.readFileSync("./app/html/navbar.html", "UTF-8");
    res.setHeader("Content-Type", "text/html");
    res.send(toSend);

  // Get footer html.
  } else if (formatOfReq == "foot") {
    toSend = fs.readFileSync("./app/html/footer.html", "UTF-8");
    res.setHeader("Content-Type", "text/html");
    res.send(toSend);
  } else {
    console.log("Unrecognized html request.");
  }

});

// -------------------------------------------------
// Function to handle JSON requests from the client.
// -------------------------------------------------
app.get("/headdata", function(req, res) {
  let formatOfReq = req.query["format"];
  let toSend;

  // Get head modal data (for all pages).
  if (formatOfReq == "i-head") {
    toSend = fs.readFileSync("./app/data/indexDAT.js");
    toSend = JSON.parse(toSend)[0].headContent;
    res.setHeader("Content-Type", "program/json");
    res.send(toSend);

  } else if (formatOfReq == "p-head") {
    toSend = fs.readFileSync("./app/data/projectsDAT.js");
    toSend = JSON.parse(toSend)[0].headContent;
    res.setHeader("Content-Type", "program/json");
    res.send(toSend);
  
  }

});

// ---------------
// Page structure.
// ---------------
// Home
// -> Experience  
// -> Projects
// -> Contact
// ---------------

// ---------------------------------
// Function for the index page.
// LANDING PAGE.
// ---------------------------------
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/app/html/index.html"));
});

app.get("/experience", (req, res) => {
  res.sendFile(path.join(__dirname, "/app/html/experience.html"));
});

app.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname, "/app/html/projects.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "/app/html/contact.html"));
});

// Server Info.
const port = 8000;

// ----------------
// Server creation.
// ----------------
app.listen(port);
