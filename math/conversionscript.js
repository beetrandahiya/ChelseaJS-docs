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

//rgbtohsl

function rgbhslex(){
    elem=document.getElementById("rgbtohsl");
    r=parseInt(elem.getElementsByTagName("input")[0].value);
    g=parseInt(elem.getElementsByTagName("input")[1].value);
    b=parseInt(elem.getElementsByTagName("input")[2].value);
    hsl=RGBtoHSL(r,g,b);
    hsl="hsl( "+hsl.h+", "+hsl.s+", "+hsl.l+" )";
    out=document.getElementsByClassName("color-output")[2];
    out.innerHTML=hsl;

    elem.style.borderColor=hsl;
    elem.style.borderWidth="8px";

}
rgbhslex();

//hsltorgb

function hslrgbex(){
    elem=document.getElementById("hsltorgb");
    h=parseInt(elem.getElementsByTagName("input")[0].value);
    s=parseInt(elem.getElementsByTagName("input")[1].value);
    l=parseInt(elem.getElementsByTagName("input")[2].value);
    rgb=HSLtoRGB(h,s,l);
    rgb="rgb( "+rgb.r+", "+rgb.g+", "+rgb.b+" )";
    out=document.getElementsByClassName("color-output")[3];
    out.innerHTML=rgb;

    elem.style.borderColor=rgb;
    elem.style.borderWidth="8px";

}
hslrgbex();

//hsltohex

function hslhexex(){
    elem=document.getElementById("hsltohex");
    h=parseInt(elem.getElementsByTagName("input")[0].value);
    s=parseInt(elem.getElementsByTagName("input")[1].value);
    l=parseInt(elem.getElementsByTagName("input")[2].value);
    hex=HSLtoHex(h,s,l);
    out=document.getElementsByClassName("color-output")[4];
    out.innerHTML=hex;

    elem.style.borderColor=hex;
    elem.style.borderWidth="8px";

}
hslhexex();

//hextohsl

function hexhslex(){
    elem=document.getElementById("hextohsl");
    hex=elem.getElementsByTagName("input")[0].value;
    hsl=HextoHSL(hex);
    hsl="hsl( "+hsl.h+", "+hsl.s+", "+hsl.l+" )";
    out=document.getElementsByClassName("color-output")[5];
    out.innerHTML=hsl;

    elem.style.borderColor=hsl;
    elem.style.borderWidth="8px";
}
hexhslex();