//Countdown
var countDownDate = new Date("Dec 24, 2024 00:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

if (distance < 0) {
clearInterval(x);
document.getElementById("demo").innerHTML = "MERRY CHRISTMAS!";
document.getElementById("demome1").style.display="none";
document.getElementById("demome2").style.display="none";
document.getElementById("demome3").style.display="none";
document.getElementById("demome4").style.display="none";
document.getElementById("slash").style.display="none";
}
}, 1000);

//Music
function slide(){
    document.getElementById("right").style.marginLeft='10px';
    document.getElementById("button").style.visibility="visible";
    document.getElementById("tesk").style.display="none";
}
function slideout(){
    let screen_width = window.innerWidth;
    if(screen_width < 800){
        document.getElementById("right").style.marginLeft='-90px';
    }
    else{
        document.getElementById("right").style.marginLeft='-150px';
    }
    document.getElementById("button").style.visibility="hidden";
    document.getElementById("tesk").style.display="block";
}
//cant copy text

let text1 = document.getElementById("its-only");
let text2 = document.getElementById("left-to");
let count = document.getElementById("demome");
text1.addEventListener("contextmenu", function(event){
    event.preventDefault();
})
text2.addEventListener("contextmenu", function(event){
    event.preventDefault();
})
count.addEventListener("contextmenu", function(event){
    event.preventDefault();
})
text1.addEventListener("copy", function(event){
    event.preventDefault();

    const customText = "You Can not Copy!";
            if (event.clipboardData) {
                event.clipboardData.setData('text/plain', customText);
            } else if (window.clipboardData) {
                window.clipboardData.setData('Text', customText);
            }
})
text2.addEventListener("copy", function(event){
    event.preventDefault();

    const customText = "You Can not Copy!";
    if (event.clipboardData) {
        event.clipboardData.setData('text/plain', customText);
    } else if (window.clipboardData) {
        window.clipboardData.setData('Text', customText);
    }
})
count.addEventListener("copy", function(event){
    event.preventDefault();

    const customText = "You Can not Copy!";
    if (event.clipboardData) {
        event.clipboardData.setData('text/plain', customText);
    } else if (window.clipboardData) { 
        window.clipboardData.setData('Text', customText);
    }
})
// working on this

// const demome1 = document.getElementById("demome1");
// const demome2 = document.getElementById("demome2");
// const demome3 = document.getElementById("demome3");
// const demome4 = document.getElementById("demome4");

// const days = document.getElementById("days");
// const hours = document.getElementById("hours");
// const minutes = document.getElementById("minutes");
// const seconds = document.getElementById("seconds");
// document.addEventListener("DOMContentLoaded", function() {
// function addScaleEffect(element) {
//     element.style.transform = "scale(1.1)";
// }

// function removeScaleEffect(element) {
//     element.style.transform = "scale(1)";
// }


// demome1.addEventListener("mouseover", function() {
//     addScaleEffect(days);
// });
// demome1.addEventListener("mouseout", function() {
//     removeScaleEffect(days);
// });

// demome2.addEventListener("mouseover", function() {
//     addScaleEffect(hours);
// });
// demome2.addEventListener("mouseout", function() {
//     removeScaleEffect(hours);
// });

// demome3.addEventListener("mouseover", function() {
//     addScaleEffect(minutes);
// });
// demome3.addEventListener("mouseout", function() {
//     removeScaleEffect(minutes);
// });

// demome4.addEventListener("mouseover", function() {
//     addScaleEffect(seconds);
// });
// demome4.addEventListener("mouseout", function() {
//     removeScaleEffect(seconds);
// });
// });