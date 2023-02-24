//debugger;

AOS.init();
// Red Metallic

document.getElementById("RedMetallic").addEventListener('click',function(){
    document.getElementById('CarColor').src='RedMetallic.png';
})

// Speedy Blue Metallic

document.getElementById("SpeedyBlueMetallic").addEventListener('click',function(){
    document.getElementById('CarColor').src='SpeedyBlueMetallic.png';
})

// Premium Silver Metallic

document.getElementById("PremiumSilverMetallic").addEventListener('click',function(){
    document.getElementById('CarColor').src='PremiumSilverMetallic.png';
})

// Super Black

document.getElementById("SuperBlack").addEventListener('click',function(){
    document.getElementById('CarColor').src='SuperBlack.png';
})

// White

document.getElementById("White").addEventListener('click',function(){
    document.getElementById('CarColor').src='White.png';
})

// Mineral Grey Metallic

document.getElementById("MineralGreyMetallic").addEventListener('click',function(){
    document.getElementById('CarColor').src='MineralGreyMetallic.png';
})

// Gallery

let Gallery1 = document.getElementById("Gallery1");
let Gallery2 = document.getElementById("Gallery2");
let Gallery3 = document.getElementById("Gallery3");
let Gallery4 = document.getElementById("Gallery4");
let Gallery6 = document.getElementById("Gallery6");
let Gallery7 = document.getElementById("Gallery7");
let Gallery8 = document.getElementById("Gallery8");
let Gallery9 = document.getElementById("Gallery9");
let Gallery10 = document.getElementById("Gallery10");
let Preview =document.getElementById("Preview");

Gallery1.addEventListener('click' ,function(){
    Preview.src='Gallery1.jpg';
})

Gallery2.addEventListener('click' ,function(){
    Preview.src='Gallery2.jpg';
})

Gallery3.addEventListener('click' ,function(){
    Preview.src='Gallery3.jpg';
})

Gallery4.addEventListener('click' ,function(){
    Preview.src='Gallery4.jpg';
})

Gallery6.addEventListener('click' ,function(){
    Preview.src='Gallery6.jpg';
})

Gallery7.addEventListener('click' ,function(){
    Preview.src='Gallery7.jpg';
})

Gallery8.addEventListener('click' ,function(){
    Preview.src='Gallery8.jpg';
})

Gallery9.addEventListener('click' ,function(){
    Preview.src='Gallery9.jpg';
})

Gallery10.addEventListener('click' ,function(){
    Preview.src='Gallery10.jpg';
})