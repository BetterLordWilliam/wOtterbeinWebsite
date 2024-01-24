// ------------------------------------
// Function to populate the head modal.
// ------------------------------------
function populateHeadModal() {
  ajaxGET("/headdata?format=i-head", function(data) {
    let df = JSON.parse(data); 
    
    // Find and populate appropriate HTML elements.
    document.querySelector("#i-head-title").innerHTML = df.modalTitle;
    document.querySelector("#i-head-subtitle").innerHTML = df.modalSubTitle;
    document.querySelector("#i-head-text1").innerHTML = df.modalText;
    document.querySelector("#i-head-text2").innerHTML = df.modalText1;
    document.querySelector("#i-head-text3").innerHTML = df.modalText2;
  });
}

// -------------------------------------
// Display the top projects in the spin.
// -------------------------------------
function displayProjects(data) {
  let projData = JSON.parse(data);
  let ogCard = document.querySelector("#project-preview-template").content;
  let cardList = document.querySelector("#preview-cards");

  console.log()

  for (let i = 0; i < projData.length; i++) {
    let element = projData[i]; 
    let currentCard = ogCard.cloneNode(true);

    currentCard.querySelector('.card').id = 'proj' + i;
    currentCard.querySelector('.card').setAttribute("for", "item-" + (i + 1));
    currentCard.querySelector('img').src = "/img/previews/" + element.ProjImage;
    currentCard.querySelector('.github').href = element.ProjLink;
    currentCard.querySelector('.subtitle').innerText = element.ProjTech;

    cardList.appendChild(currentCard);
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

  // Get Top Projects Data.
  ajaxGET("/dbdat?format=top-projects", function(data) {
    displayProjects(data);
  });

  // Populate contents of head modal.
  populateHeadModal();

  console.log("Loaded");
}

onload();