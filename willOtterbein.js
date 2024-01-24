// SETUP
const express = require('express');
const path = require('path');
const fs = require('fs');
const connection = require('./app/util/connection.js');
const PORT = process.env.PORT || 3030;

// App Stuff Cont.
const app = express();

// Resource paths.
app.use("/js", express.static("./public/scripts"));
app.use("/css", express.static("./public/css"));
app.use("/img", express.static("./public/images"));
app.use("/fonts", express.static("./public/fonts"));
app.use("/fonts", express.static("./public/html"))

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

// Query database for projects.
async function getProjects() {
  const sql = "SELECT * FROM projects";
  const [rows] = await connection.promise().query(sql);
  return rows;
}

// Query database for only top projects.
// You may consider this hacky...
// I consider this intuitive!
// PLEASE NOTE: The above comments refer to the now defunct code.
// A proper query has now been setup.
async function getTopProjects() {
  const sql = `
    SELECT * FROM projects
    ORDER BY ProjAddDate DESC
    LIMIT 3;
  `;
  const [rows] = await connection.promise().query(sql);
  const num = 3;
  const size = rows.length;

  /*
  // Define to send array.
  let toSend = [];

  // Read the bottom elements
  for (let i = size - 1; i > (size - (num + 1)); i--) {
    toSend.push(rows[i]);
  }
  return toSend;
  */

  return rows;
}

// ------------------------------------- 
// Function to handle database requests.
// -------------------------------------
app.get("/dbdat", function(req, res) {
  let formatOfReq = req.query["format"];
  let toSend;

  if (formatOfReq == "projects") {
    getProjects().then(function(data){
      toSend = data;
      res.setHeader("Content-Type", "program/json");
      res.send(toSend);
    });

  } else if (formatOfReq == "top-projects") {
    getTopProjects().then(function(data) {
      toSend = data;
      res.setHeader("Content-Type", "program/json");
      res.send(toSend);
    });
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

// ----------------
// Server creation.
// ----------------
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`)
});
