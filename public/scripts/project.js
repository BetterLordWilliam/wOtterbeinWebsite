// ------------------------------------
// Function to populate the head modal.
// ------------------------------------
function populateHeadModal() {
  ajaxGET("/headdata?format=p-head", function(data) {
    let df = JSON.parse(data); 
    
    // Find and populate appropriate HTML elements.
    document.querySelector("#p-head-title").innerHTML = df.modalTitle;
    document.querySelector("#p-head-subtitle").innerHTML = df.modalSubTitle;
    document.querySelector("#p-head-text1").innerHTML = df.modalText;
    document.querySelector("#p-head-text2").innerHTML = df.modalText1;
  });
}

// ---------------------------------
// Generate Projects Page Structure.
// ---------------------------------
function displayProjects(data) {
  let projData = JSON.parse(data);
  console.log(projData);
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

  // Get the projects page data.
  ajaxGET("/dbdat?format=projects", function(data) {
    displayProjects(data);
  });

  populateHeadModal();

  console.log("Loaded");
}

onload();