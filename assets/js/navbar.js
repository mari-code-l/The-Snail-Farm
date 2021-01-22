window.onload = function() {
  // Grab features section from the DOM
  var features = document.getElementById("features-header");
  // Grab dropdown menu from the DOM
  var dropdown = document.getElementsByClassName("features-dropdown")[0];
  // Creates function to add dropdown menu
  var addMenu = function addDropDownMenu() {
    dropdown.classList.add("on");
    console.log("hi");
  };
  // Creates function to remove dropdown menu
  var removeMenu = function removeDropDownMenu() {
    dropdown.classList.remove("on");
    console.log("bye");
  };
  // Add mouse over event to show menu
  features.addEventListener("mouseover", addMenu);
  // Add mouse out event to remove menu
  features.addEventListener("mouseout", removeMenu);
};
