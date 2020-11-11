
//Function to display filtering options when on small screens
function displayFiltering() {
  var filterOptions = document.querySelector('#filtering');
  var filterArrow = document.querySelector('#filterArrow');
  if (filterOptions.style.display === "flex"){
    filterOptions.style.display = "none";
    filterArrow.style.transform= "rotate(0deg)"
  }else {
    filterOptions.style.display = "flex";
    filterArrow.style.transform= "rotate(180deg)"
  }
}


//Function to filter items
// not exactly vanilla as there is one lodash function

var allCheckboxes = document.querySelectorAll('input[type=checkbox]');
var allWines = Array.from(document.querySelectorAll('.wineList')); //Ændret fra .play til .wineList og var navn ændret fra allPlayers til allWines
var checked = {};

getChecked('sale'); //Ændret fra sale til sale
getChecked('pairing'); //Ændret fra injured til pairing
getChecked('country'); //position til country
getChecked('region'); // nbaTeam til region
getChecked('maceration'); //conference til maceration

Array.prototype.forEach.call(allCheckboxes, function (el) {
  el.addEventListener('change', toggleCheckbox);
});

function toggleCheckbox(e) {
  getChecked(e.target.name);
  setVisibility();
}

function getChecked(name) {
  checked[name] = Array.from(document.querySelectorAll('input[name=' + name + ']:checked')).map(function (el) {
    return el.value;
  });
}

function setVisibility() {
  allWines.map(function (el) {
    var sale = checked.sale.length ? _.intersection(Array.from(el.classList), checked.sale).length : true;
    var pairing = checked.pairing.length ? _.intersection(Array.from(el.classList), checked.pairing).length : true;
    var country = checked.country.length ? _.intersection(Array.from(el.classList), checked.country).length : true;
    var region = checked.region.length ? _.intersection(Array.from(el.classList), checked.region).length : true;
    var maceration = checked.maceration.length ? _.intersection(Array.from(el.classList), checked.maceration).length : true;
    if (sale && pairing && country && region && maceration) {
      el.style.display = 'grid';
    } else {
      el.style.display = 'none';
    }
  });
}
