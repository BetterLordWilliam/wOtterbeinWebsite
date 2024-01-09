// ------------------
// AJAX Get function.
// ------------------
function ajaxGET(url, callback) {
  let xhr = new XMLHttpRequest();

  xhr.onload = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      callback(this.responseText);
    } else {
      console.log(this.status);
    }
  };

  xhr.open("GET", url);
  xhr.send();
}

// --------------
// Setup buttons.
// --------------
function loadButtons() {
  // Do something...
}

// -----------------------------------
// Setup onload.
// Loads necessary website components.
// -----------------------------------
// 1) Buttons.
// 2) Load information.
// That's pretty much it..
// -----------------------------------
function onload() {
  // Call function to setup page buttons.
  loadButtons();

  // Insert the page navbar.
  ajaxGET("/html?format=nav", function(data) {
    document.querySelector("#nav-placeholder").innerHTML = data;
  });

  // Insert the page footer.
  ajaxGET("/html?format=foot", function(data) {
    document.querySelector("#footer-placeholder").innerHTML = data;
  });

  console.log("Loaded");
}

onload();
