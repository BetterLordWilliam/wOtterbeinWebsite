// SETUP
const express = require('express');
const fs = require('fs');

// App Stuff Cont.
const app = express();
const router = express.Router();

// Resource paths.
app.use("/js", express.static("./public/scripts"));
app.use("/css", express.static("./public/css"));
app.use("/img", express.static("./public/images"));
app.use("/fonts", express.static("./public/fonts"));

app.use("/experience", express.static("./app/html/experience.html"));

// -----------------------
// Send index and related.
// -----------------------
app.get("/", function(req, res) {
  let doc = fs.readFileSync("./app/html/index.html", "utf8");

  // Send the index document.
  res.send(doc);
});

// ------------------------------------------------------
// Function to handle html page requests from the client.
// ------------------------------------------------------
app.get("/html", function(req, res) {
  let formatOfReq = req.query["format"];
  console.log(formatOfReq);

  if (formatOfReq == "experience") {
    res.sendFile(fs.readFileSync("/experience"));

  } else if (formatOfReq == "projects") {
    res.redirect("./app/html/projects.html");

  } else if (formatOfReq == "contact") {
    res.redirect("./app/html/contact.html");

  } else {
    console.log("Unrecognized html request.");

  }

});

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
app.get("/jdata", function(req, res) {
  let formatOfReq = req.query["format"];
  let toSend;

  // Get head modal data.
  if (formatOfReq == "i-head") {
    toSend = fs.readFileSync("./app/data/indexDAT.js");
    toSend = JSON.parse(toSend)[0].headContent;
    res.setHeader("Content-Type", "program/json");
    res.send(toSend);
  }

});

// ---------------------------
// Page not found information.
// ---------------------------
app.use(function (req, res, next) {
  // 404 Not found to come.
  res.status(404).send("<html><head><title>Page not found!</title></head><body><p>Nothing here.</p></body></html>");
});

// Server Info.
const port = 8000;

// ----------------
// Server creation.
// ----------------
app.listen(port, function() {
  console.log("App listning on port " + port);
});
