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
  ajaxGET("/hsnip?format=nav", function(data) {
    let nav = document.querySelector("#nav-placeholder");
    nav.innerHTML = data;
    navButtons(nav);
  });

  // Insert the page footer.
  ajaxGET("/hsnip?format=foot", function(data) {
    let foot = document.querySelector("#footer-placeholder");
    foot.innerHTML = data;
    footerButtons(foot);
  });


  console.log("Loaded");
}

onload();