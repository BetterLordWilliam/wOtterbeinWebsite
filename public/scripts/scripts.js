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

// ---------------------
// Setup navbar buttons.
// ---------------------
function navButtons(nav) {
  console.log("Nav buttons setup complete.");

  // Home image
  nav.querySelector("#nav-img").addEventListener("click", () => {

  }, false);

  // Experience
  nav.querySelector("#exp-link").addEventListener("click", () => {
    
  }, false);

  // Projects
  nav.querySelector("#proj-link").addEventListener("click", () => {
    
  }, false);

  // Contacts
  nav.querySelector("#contact-link").addEventListener("click", () => {

  }, false);
}

// ---------------------
// Setup footer buttons.
// ---------------------
function footerButtons(foot) {
  console.log("Foot buttons setup complete.");
}