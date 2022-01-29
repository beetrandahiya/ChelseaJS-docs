//rgbtohex
function rgbhexex(){
elem=document.getElementById("rgbtohex");
r=parseInt(elem.getElementsByTagName("input")[0].value);
g=parseInt(elem.getElementsByTagName("input")[1].value);
b=parseInt(elem.getElementsByTagName("input")[2].value);
hex=RGBtoHex(r,g,b);
out=document.getElementsByClassName("color-output")[0];
out.innerHTML=hex;

elem.style.borderColor=hex;
elem.style.borderWidth="8px";
}

rgbhexex();

//hextorgb
function hexrgbex(){
elem=document.getElementById("hextorgb");
hex=elem.getElementsByTagName("input")[0].value;
rgb=HextoRGB(hex);
rgb="rgb( "+rgb.r+", "+rgb.g+", "+rgb.b+" )";
out=document.getElementsByClassName("color-output")[1];
out.innerHTML=rgb;

elem.style.borderColor=rgb;
elem.style.borderWidth="8px";
}

hexrgbex();