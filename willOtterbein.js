// SETUP
const express = require('express');
const fs = require('fs');

// App Stuff Cont.
const app = express();

// Resource paths.
app.use("/js", express.static("./public/scripts"));
app.use("/css", express.static("./public/css"));
app.use("/img", express.static("./public/images"));
app.use("/fonts", express.static("./public/fonts"));

// -----------------------
// Send index and related.
// -----------------------
app.get("/", function(req, res) {
  let doc = fs.readFileSync("./app/html/index.html", "utf8");

  // Send the index document.
  res.send(doc);
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
