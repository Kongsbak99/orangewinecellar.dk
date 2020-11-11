

//Variables
var slideContent1, slideContent2, slideContent3, slideContent4, background, timeout;

slideContent1 = document.getElementById("slideContent1");
slideContent2 = document.getElementById("slideContent2");
slideContent3 = document.getElementById("slideContent3");
slideContent4 = document.getElementById("slideContent4");
//var slideContent = document.getElementById("slideContent3");
//var slideContent = document.getElementById("slideContent4");


//Start slideshow and change from slide 1 to slide 2
window.onload = function() {slide1()};



//Slide 1
function slide1() {

  slideContent1.style.transitionDuration = "2s";

  slideContent1.style.visibility = "visible";
  slideContent2.style.visibility = "hidden";
  slideContent3.style.visibility = "hidden";
  slideContent4.style.visibility = "hidden";
  slideContent1.style.opacity = "1";
  slideContent2.style.opacity = "0";
  slideContent3.style.opacity = "0";
  slideContent4.style.opacity = "0";

  timeout = setTimeout ( "slide2()", 6000 );
}

//Slide 2
function slide2() {

  slideContent2.style.transitionDuration = "2s";

  slideContent1.style.visibility = "hidden";
  slideContent2.style.visibility = "visible";
  slideContent3.style.visibility = "hidden";
  slideContent4.style.visibility = "hidden";
  slideContent1.style.opacity = "0";
  slideContent2.style.opacity = "1";
  slideContent3.style.opacity = "0";
  slideContent4.style.opacity = "0";


  timeout = setTimeout ( "slide3()", 6000 );
}

//Slide 3
function slide3() {

  slideContent3.style.transitionDuration = "2s";

  slideContent1.style.visibility = "hidden";
  slideContent2.style.visibility = "hidden";
  slideContent3.style.visibility = "visible";
  slideContent4.style.visibility = "hidden";
  slideContent1.style.opacity = "0";
  slideContent2.style.opacity = "0";
  slideContent3.style.opacity = "1";
  slideContent4.style.opacity = "0";


  timeout = setTimeout ( "slide4()", 6000 );
}

//Slide 4
function slide4() {

  slideContent4.style.transitionDuration = "2s";

  slideContent1.style.visibility = "hidden";
  slideContent2.style.visibility = "hidden";
  slideContent3.style.visibility = "hidden";
  slideContent4.style.visibility = "visible";
  slideContent1.style.opacity = "0";
  slideContent2.style.opacity = "0";
  slideContent3.style.opacity = "0";
  slideContent4.style.opacity = "1";


  timeout = setTimeout ( "slide1()", 6000 );
}



// Choose slide and stay on that slide
function slide1Stay() {
  slideContent2.style.transitionDuration = "2s";

  //Display chosen slide
  slideContent1.style.visibility = "visible";
  slideContent2.style.visibility = "hidden";
  slideContent3.style.visibility = "hidden";
  slideContent4.style.visibility = "hidden";
  slideContent1.style.opacity = "1";
  slideContent2.style.opacity = "0";
  slideContent3.style.opacity = "0";
  slideContent4.style.opacity = "0";

  //Clear timeout to get out of slideshow auto-loop
  clearTimeout(timeout);
}
function slide2Stay() {
  slideContent2.style.transitionDuration = "2s";

  //Display chosen slide
  slideContent1.style.visibility = "hidden";
  slideContent2.style.visibility = "visible";
  slideContent3.style.visibility = "hidden";
  slideContent4.style.visibility = "hidden";
  slideContent1.style.opacity = "0";
  slideContent2.style.opacity = "1";
  slideContent3.style.opacity = "0";
  slideContent4.style.opacity = "0";

  //Clear timeout to get out of slideshow auto-loop
  clearTimeout(timeout);
}
function slide3Stay() {
  slideContent3.style.transitionDuration = "2s";

//Display chosen slide
  slideContent1.style.visibility = "hidden";
  slideContent2.style.visibility = "hidden";
  slideContent3.style.visibility = "visible";
  slideContent4.style.visibility = "hidden";
  slideContent1.style.opacity = "0";
  slideContent2.style.opacity = "0";
  slideContent3.style.opacity = "1";
  slideContent4.style.opacity = "0";

  //Clear timeout to get out of slideshow auto-loop
  clearTimeout(timeout);
}
function slide4Stay() {
  slideContent4.style.transitionDuration = "2s";

//Display chosen slide
  slideContent1.style.visibility = "hidden";
  slideContent2.style.visibility = "hidden";
  slideContent3.style.visibility = "hidden";
  slideContent4.style.visibility = "visible";
  slideContent1.style.opacity = "0";
  slideContent2.style.opacity = "0";
  slideContent3.style.opacity = "0";
  slideContent4.style.opacity = "1";

  //Clear timeout to get out of slideshow auto-loop
  clearTimeout(timeout);
}
