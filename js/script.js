/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  //var x = document.getElementById("myLinks");
  var x = document.getElementsByClassName("nav-bar")[0];
  //var y = document.getElementById("myLinks2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
//script to make navBar sticky
// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyFunction()};

// Get the navbar
var navbar = document.getElementById("navSection");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunction() {
  var burgerMenu, shoppingcart, topInfo, myLinks;
  //Reposition burger and cart to follow the sticky header
  burgerMenu = document.getElementsByClassName("icon")[0];
  cart = document.getElementsByClassName("shopping-cart")[0];

  myLinks = document.getElementsByClassName("nav-bar")[0];

  //Increase topinfo size to fill the hole created by the sticky header when scrolled
  topInfo = document.getElementById("topInfo");
  const navbarHeight = navbar.style.height;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.style.boxShadow = "0 20px 25px -15px rgba(0,0,0,0.5)";
    topInfo.classList.add("topInfoHeightFix");
    burgerMenu.setAttribute("id", "burgerMenu");
    cart.setAttribute("id", "shoppingcart");
    myLinks.removeAttribute("id", "myLinks");
    myLinks.setAttribute("id", "myLinks2");

  } else {
    navbar.classList.remove("sticky");
    topInfo.classList.remove("topInfoHeightFix");
    burgerMenu.removeAttribute("id", "burgerMenu");
    cart.removeAttribute("id", "shoppingcart");
    myLinks.removeAttribute("id", "myLinks2");
    myLinks.setAttribute("id", "myLinks");

  }
}




//Standard settings for snipcart
document.addEventListener('snipcart.ready', () => {
  Snipcart.api.session.setLanguage('da', {
      billing: {
        continue_to_shipping: "Fortsæt til levering"
      },
      cart: {
        shipping_taxes_calculated_at_checkout: "Forsendelse udregnes i kassen. Moms er inkluderet i prisen."
      },
      address_form: {
        province: "Region (Ikke påkrævet)"
      }
  });
});

//Snipcart choose quantity on site (jQuery)
$('#my-quantity').change(function() {
    $('#my-button').attr('data-item-quantity', $(this).val());
});


//"Vinen er tilføjet til kurven"

function scaleUp ( ){
  var lagtIKurv = document.getElementById("lagtIKurv");

  lagtIKurv.style.transitionDuration = "1s";
  lagtIKurv.style.transform = "translateY(130px)";
  setTimeout ( "scaleDown()", 6000 );

}

function scaleDown ( ){
  var lagtIKurv = document.getElementById("lagtIKurv");

  lagtIKurv.style.transitionDuration = "1s";
  lagtIKurv.style.transform = "translateY(0)";
}







//Script for search bar in products
function searchFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue, noWineCount;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByClassName('searchName');
  region = ul.getElementsByClassName('searchRegion');

  noWineCount = 0;



  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    aRegion = region[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    regionValue = aRegion.textContent || aRegion.innerText;
    noWine = document.getElementsByClassName('noWine');

    if (txtValue.toUpperCase().indexOf(filter) > -1 || regionValue.toUpperCase().indexOf(filter) > -1) {
      li[i].parentElement.parentElement.parentElement.style.display = "";
      noWineCount--
    } else {
      li[i].parentElement.parentElement.parentElement.style.display = "none";
      noWineCount++
    }
  }

  //if statement to display a 404 error if the search query doesnt show any results.
  //vars: noWine = the 404 div, noWineCount = the counter to see if any wine is showing
  var noWine;
    noWine = document.getElementById('noWine');
  if ( noWineCount == li.length ) {
    noWine.style.display = "flex";

  } else {
    noWine.style.display = "none";

  }
}


//Dropdown menu to show filter buttons
function dropdownFunction() {
  var sortArrow = document.querySelector('#sortArrow');

  document.getElementById("myDropdown").classList.toggle("show");
  if (sortArrow.style.transform === "rotate(180deg)"){
    sortArrow.style.transform = "rotate(0deg)";
  }else{
    sortArrow.style.transform = "rotate(180deg)"
  }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  var sortArrow = document.querySelector('#sortArrow');

  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    sortArrow.style.transform = "rotate(0deg)";
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



//Sort buttons for sorting alphabetically and numerically
function sortListAZ() {
  var list, sortAZ, i, switching, b, shouldSwitch, dir, switchcount = 0;
  list = document.getElementById("myUL");
  sortAZ = document.getElementById("sortAZ");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  // Make a loop that will continue until no switching has been done:
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsByClassName("name");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should switch place with the current item,
      based on the sorting direction (asc or desc): */
      if (dir == "asc") {
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          /* if next item is alphabetically lower than current item,
          mark as a switch and break the loop: */
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
          /* if next item is alphabetically higher than current item,
          mark as a switch and break the loop: */
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      b[i].parentElement.parentElement.parentElement.parentNode.insertBefore(b[i + 1].parentElement.parentElement.parentElement, b[i].parentElement.parentElement.parentElement);
      switching = true;
      // Each time a switch is done, increase switchcount by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount === 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
      if (dir == "asc") {
        sortAZ.innerHTML = "Sorter Z - A"
      } else {
        sortAZ.innerHTML = "Sorter A - Z"
      }
    }
  }
}



//Sort button for prices low/high
function sortListPriceLow() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("myUL");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsByClassName("price");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      // start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should
      switch place with the current item: */

      if (Number(b[i].innerHTML) > Number(b[i + 1].innerHTML)) {
        /* if next item is numerically
        lower than current item, mark as a switch
        and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentElement.parentElement.parentElement.parentElement.parentNode.insertBefore(b[i + 1].parentElement.parentElement.parentElement.parentElement, b[i].parentElement.parentElement.parentElement.parentElement);
      switching = true;
    }
  }
}
//High/low
function sortListPriceHigh() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("myUL");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsByClassName("price");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      // start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should
      switch place with the current item: */

      if (Number(b[i].innerHTML) < Number(b[i + 1].innerHTML)) {
        /* if next item is numerically
        lower than current item, mark as a switch
        and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentElement.parentElement.parentElement.parentElement.parentNode.insertBefore(b[i + 1].parentElement.parentElement.parentElement.parentElement, b[i].parentElement.parentElement.parentElement.parentElement);
      switching = true;
    }
  }
}


//Sort button for vivino rating
function sortListVivino() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("myUL");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsByClassName("vivino-widget-rating-avg");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      // start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should
      switch place with the current item: */

      if (Number(b[i].innerHTML) < Number(b[i + 1].innerHTML)) {
        /* if next item is numerically
        lower than current item, mark as a switch
        and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentNode.insertBefore(b[i + 1].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement, b[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
      switching = true;
    }
  }
}
