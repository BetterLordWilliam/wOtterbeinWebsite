const serviceId = "service_mm3gzga";
const emailTemplate1 = "template_kqh9p8j";

// ------------------------------------------------
// Function to send an email from the contact page.
// ------------------------------------------------
function sendEmail() {
  let emailTemplateContent = {
    from_name: document.querySelector("#cnt-name").value,
    to_name: "Will Otterbein",
    from_email: document.querySelector("#cnt-email").value,
    from_phone: document.querySelector("#cnt-phone").value,
    message: document.querySelector("#cnt-message").value 
  };

  // Actually send the email.
  emailjs.send(
    serviceId, 
    emailTemplate1, 
    emailTemplateContent
  ).then(
    alert("Email message sent.")
  );
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