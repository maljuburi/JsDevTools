var dropdown = document.getElementById("dropdown");
var subMenu = document.getElementById("subMenu");

dropdown.addEventListener('click', showSubMenu);

function showSubMenu() {
  if (subMenu.style.display == "block") {
    subMenu.style.display = "none";
  } else {
    subMenu.style.display = "block";
  }

}




