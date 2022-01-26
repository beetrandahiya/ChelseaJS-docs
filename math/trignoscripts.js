// graphs
 graph1=document.getElementsByClassName("graph-container")[0];

 //sin
 function draw(){
     setCanvas(graph1);
     new line(0,HEIGHT/2,WIDTH,HEIGHT/2,'#fff',0.4);
    new line(WIDTH/2,0,WIDTH/2,HEIGHT,'#fff',0.4);
     for(i=0;i<innerWidth;i+=1){
        x=mapRange(i,0,WIDTH,-2*Math.PI,2*Math.PI);
        y=HEIGHT/2-HEIGHT*sin(x)/4;
        new point(i,y,'#695FE6',1);
     }
 }

 draw()

 graph1=document.getElementsByClassName("graph-container")[1];
//cos
 function draw1(){
     setCanvas(graph1);
     new line(0,HEIGHT/2,WIDTH,HEIGHT/2,'#fff',0.4);
    new line(WIDTH/2,0,WIDTH/2,HEIGHT,'#fff',0.4);
     for(i=0;i<innerWidth;i+=1){
        x=mapRange(i,0,WIDTH,-2*Math.PI,2*Math.PI);
        y=HEIGHT/2-HEIGHT*cos(x)/4;
        new point(i,y,'#695FE6',1);
     }
 }

 draw1()

graph1=document.getElementsByClassName("graph-container")[2];   
//tan
function draw2(){
    setCanvas(graph1);
    new line(0,HEIGHT/2,WIDTH,HEIGHT/2,'#fff',0.4);
   new line(WIDTH/2,0,WIDTH/2,HEIGHT,'#fff',0.4);
    for(i=0;i<innerWidth;i+=1){
       x=mapRange(i,0,WIDTH,-2*Math.PI,2*Math.PI);
       y=HEIGHT/2-HEIGHT*tan(x)/4;
       new point(i,y,'#695FE6',1);
    }
}

draw2()


graph1=document.getElementsByClassName("graph-container")[3];
//asin
function draw3(){
    setCanvas(graph1);
    new line(0,HEIGHT/2,WIDTH,HEIGHT/2,'#fff',0.4);
   new line(WIDTH/2,0,WIDTH/2,HEIGHT,'#fff',0.4);
    for(i=0;i<innerWidth;i+=1){
       x=mapRange(i,0,WIDTH,-2*Math.PI,2*Math.PI);
       y=HEIGHT/2-HEIGHT*asin(x)/4;
       new point(i,y,'#695FE6',1);
    }
}

    draw3()

graph1=document.getElementsByClassName("graph-container")[4];
//acos
function draw4(){
    setCanvas(graph1);
    new line(0,(4*HEIGHT/5),WIDTH,(4*HEIGHT/5),'#fff',0.4);
   new line(WIDTH/2,0,WIDTH/2,HEIGHT,'#fff',0.4);
    for(i=0;i<innerWidth;i+=1){
       x=mapRange(i,0,WIDTH,-2*Math.PI,2*Math.PI);
       y=4*HEIGHT/5-HEIGHT*acos(x)/4;
       new point(i,y,'#695FE6',1);
    }
}

    draw4()

graph1=document.getElementsByClassName("graph-container")[5];
//atan
function draw5(){
    setCanvas(graph1);
    new line(0,HEIGHT/2,WIDTH,HEIGHT/2,'#fff',0.4);
   new line(WIDTH/2,0,WIDTH/2,HEIGHT,'#fff',0.4);
    for(i=0;i<innerWidth;i+=1){
       x=mapRange(i,0,WIDTH,-2*Math.PI,2*Math.PI);
       y=HEIGHT/2-HEIGHT*atan(x)/4;
       new point(i,y,'#695FE6',1);
    }
}
draw5()



//////////////hyerbolic tangents/////////////////

graph1=document.getElementsByClassName("graph-container")[6];
//sinh and cosh and tanh
function draw7(){
    setCanvas(graph1);
    new line(0,HEIGHT/2,WIDTH,HEIGHT/2,'#fff',0.4);
   new line(WIDTH/2,0,WIDTH/2,HEIGHT,'#fff',0.4);
   new line((WIDTH/2)+(WIDTH/(4*PI)),0,(WIDTH/2)+(WIDTH/(4*PI)),HEIGHT,'rgba(255,255,255,0.4)',0.4);
    new line((WIDTH/2)-(WIDTH/(4*PI)),0,(WIDTH/2)-(WIDTH/(4*PI)),HEIGHT,'rgba(255,255,255,0.4)',0.4);
    new line(0,HEIGHT/2+(HEIGHT/(6)),WIDTH,HEIGHT/2+(HEIGHT/(6)),'rgba(255,255,255,0.4)',0.4);
    new line(0,HEIGHT/2-(HEIGHT/(6)),WIDTH,HEIGHT/2-(HEIGHT/(6)),'rgba(255,255,255,0.4)',0.4);

    new text(80,50,'sinh',20,'Inter',400,'#695FE6',0,'#695FE6','middle');
    new text(80,80,'cosh',20,'Inter',400,'#695FE6',0,'#F4BFE6','middle');
    new text(80,110,'tanh',20,'Inter',400,'#695FE6',0,'#DC4966','middle');
    for(i=0;i<innerWidth;i+=1){
       x=mapRange(i,0,WIDTH,-2*Math.PI,2*Math.PI);
       y=HEIGHT/2-HEIGHT*sinh(x)/6;
       y1=HEIGHT/2-HEIGHT*cosh(x)/6;
       y2=HEIGHT/2-HEIGHT*tanh(x)/6;
       new point(i,y,'#695FE6',1);
       new point(i,y1,'#F4BFE6',1);
         new point(i,y2,'#DC4966',1);
    }
}
draw7();