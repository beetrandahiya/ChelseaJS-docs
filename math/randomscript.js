
elem1=document.getElementsByClassName("example-container")[0];

setCanvas(elem1);
function draw1(){
    

    new circle(randomGaussian(WIDTH/2,WIDTH/8),HEIGHT/2,15,'rgba(105,95,230,0.5)',0.3,'none',0);

    requestAnimationFrame(draw1);
}
draw1();