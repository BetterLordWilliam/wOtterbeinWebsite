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

// --------------------------------------------------
// Attaches correct routing functionality to buttons.
// --------------------------------------------------
function pageLinks(elem) {
  // Home image
  try {
    elem.querySelector("#nav-img").addEventListener("click", () => {
      console.log("Home");
      window.location.href = "/";
    }, false); 
  } catch(TypeError) {}

  // Experience -> No a thing yet...
  try {
    elem.querySelector("#exp-link").addEventListener("click", () => {
      console.log("Experience");
      window.location.href = "/experience";
    }, false);
  } catch (TypeError) {}

  // Projects
  try {
    elem.querySelector("#proj-link").addEventListener("click", () => {
      console.log("Projects");
      window.location.href = "/projects";
    }, false);
  } catch (TypeError) {}

  // Contacts
  try {
    elem.querySelector("#contact-link").addEventListener("click", () => {
      console.log("Contact");
      window.location.href = "/contact";
    }, false);
  } catch(TypeError) {}
}

// ---------------------
// Setup navbar buttons.
// ---------------------
function navButtons(nav) {
  pageLinks(nav);
}

// ---------------------
// Setup footer buttons.
// ---------------------
function footerButtons(foot) {
  pageLinks(foot);
}

// ------------------------------------------------
// Link contacts extra button to the contacts page.
// ------------------------------------------------
try {
  let contactButton = document.querySelector("#e-contact-button");
  contactButton.addEventListener("click", () => {
    window.location.href = "/contact";
  }, false); 
} catch (TypeError) {
  // No button, whatever
}