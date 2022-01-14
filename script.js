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

// Examples 

//container1

elem1=document.getElementsByClassName("example-container")[0];
elem2=document.getElementsByClassName("example-container")[1];
elem3=document.getElementsByClassName("example-container")[2];
setCanvas(elem1);

function draw(){
  new circle(100,100,50,"#695fe6",1,'#fff',1);
}

draw()

setCanvas(elem2);
function draw1(){
  clearCanvas();
  new circle(100,100,50,"#695fe6",1,'#fff',1);
  
  requestAnimationFrame(draw1);
}
draw1()

setCanvas(elem3);
var t=0;
function draw2(){
    clearCanvas();
    new circle(100+t,100,50,"#695fe6",1,'#fff',1);
    
    t+=1;
    if(t>WIDTH){
        t=0;
    }
    requestAnimationFrame(draw2);
}
draw2()