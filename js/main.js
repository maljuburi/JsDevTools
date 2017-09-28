var dropdown = document.getElementById("dropdown");
var subMenu = document.getElementById("subMenu");

dropdown.addEventListener('click', showSubMenu);

function showSubMenu(){
  if (subMenu.style.display == "block"){
    subMenu.style.display="none";
  }else{
    subMenu.style.display="block";
  }

}




//=================
// Image Slider
// ===================


//initializing index
var index = 1;

// going to the next slide
function plusSlide(n){
  // update showSlide
  showSlide(index += n);
}

//calling showSlide
showSlide(index);

// Showing next/prev slide
function showSlide(n){

  // graping all slides
  var slides = document.getElementsByClassName("slide");

  // after last slide view first slide
  if (n > slides.length) {
    index = 1;
  }

  // view last slide if going back from first slide.
  if (n < 1) {
    index = slides.length;
  }

  // looping through the slides and hiding all
  for(var i=0; i<slides.length; i++){
    slides[i].style.display="none";
  }

  // showing current slide
  slides[index-1].style.display ="block";


}
