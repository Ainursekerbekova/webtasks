let img1=document.getElementById("img1");
let img2=document.getElementById("img2");
let img3=document.getElementById("img3");
let img4=document.getElementById("img4");
let img5=document.getElementById("img5");
let img6=document.getElementById("img6");

img1.onclick=f;
img2.onclick=f;
img3.onclick=f;
img3.onclick=f;
img4.onclick=f;
img5.onclick=f;
img6.onclick=f;

let big=document.getElementById("bol");
function f() {
    big.src=this.src;
}