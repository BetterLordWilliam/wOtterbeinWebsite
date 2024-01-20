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

// --------------------------------------
// Populate the cards with relevant info.
// --------------------------------------
function displayProjects(data) {
  let projData = JSON.parse(data);
  let ogCard = document.querySelector("#project-preview-template").content;
  let cardList = document.querySelector("#p-content");

  for (let i = 0; i < projData.length; i++) {
    let element = projData[i];
    let newCard = ogCard.cloneNode(true);

    // Fill in specific information.
    newCard.querySelector("#p-card-title").innerText = element.ProjName;
    newCard.querySelector("#p-card-subtitle").innerText = element.ProjStart;
    newCard.querySelector("#p-card-subtitle1").innerText = element.ProjEnd;
    newCard.querySelector("#p-card-image").src = "/img/card/" + element.ProjImage;
    newCard.querySelector("#p-card-details").innerText = element.ProjDesc;
    newCard.querySelector("#p-card-tech").innerText = element.ProjTech;
    newCard.querySelector("#p-card-git").href = element.ProjLink;

    cardList.insertBefore(newCard, document.querySelector("#put-before"));
  }
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