var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    this.downarrow = this.lastChild;
    if(this.downarrow.classList.contains("fa-angle-up")){
        this.downarrow.classList.remove("fa-angle-up");
        this.downarrow.classList.add("fa-angle-down");
    } 
    else {
        this.downarrow.classList.remove("fa-angle-down");
        this.downarrow.classList.add("fa-angle-up");
    }
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

//responsive navbar
function navbar_resp() {
  var x = document.getElementsByClassName("navstuff")[0];
  var navb=document.getElementsByClassName("navbar")[0];
  if (x.className === "navstuff") {
    x.className+=" responsive";
  navb.className+=" responsive-bar"}
    else {
      x.className = "navstuff";
      navb.className="navbar";
    }
  }

