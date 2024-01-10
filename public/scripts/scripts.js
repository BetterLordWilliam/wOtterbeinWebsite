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

function pageGET(url) {
  let htr = new XMLHttpRequest();
  htr.open("GET", url);
  htr.send();
}

// ---------------------
// Setup navbar buttons.
// ---------------------
function navButtons(nav) {
  // Home image
  nav.querySelector("#nav-img").addEventListener("click", () => {
    console.log("Home");
    window.location.href = "/";
  }, false);

  // Experience
  nav.querySelector("#exp-link").addEventListener("click", () => {
    console.log("Experience");
    window.location.href = "/experience";
  }, false);

  // Projects
  nav.querySelector("#proj-link").addEventListener("click", () => {
    console.log("Projects");
    window.location.href = "/projects";
  }, false);

  // Contacts
  nav.querySelector("#contact-link").addEventListener("click", () => {
    console.log("Contact");
    window.location.href = "/contact";
  }, false);
}

// ---------------------
// Setup footer buttons.
// ---------------------
function footerButtons(foot) {
}