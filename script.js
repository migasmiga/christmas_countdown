//Countdown
var countDownDate = new Date("Dec 24, 2024 00:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("demo").innerHTML = days + "&nbsp| " + hours + "&nbsp| "
+ minutes + "&nbsp| " + seconds + " ";

if (distance < 0) {
clearInterval(x);
document.getElementById("demo").innerHTML = "MERRY CHRISTMAS!";
document.getElementById("demome").style.display="none";
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
