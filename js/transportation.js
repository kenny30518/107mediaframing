//preloader//
$(window).on('load', function(){
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".loading").style.visibility = "visible";
    } else {
        document.querySelector(".loading").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
});

//burger animation
var tl = new TimelineMax({paused: true});

tl.to(".item1",0.8,{
    y: 6,
    rotation: 45,
    ease: Expo.easeInOut
});

tl.to(".item2",0.8,{
    opacity: 0,
    ease: Expo.easeInOut,
    delay: -0.8
});

tl.to(".item3",0.8,{
    y: -8,
    rotation: -225,
    ease: Expo.easeInOut,
    delay: -0.8
});

tl.reverse();
$(document).on("click", ".burgerwrapper", function() {
    tl.reversed(!tl.reversed());
});

//change content by screen width
$(window).on('load', function(){
    if($( window ).width() <= 1066){
        document.getElementById("railContent").innerHTML = "<p>觀眾自捷運淡水信義線（紅線）至中山站下車，於 2 號出口出站後，步行至，往前行走約 200 公尺，右手邊出現世新資傳畢展看板，即抵達PPP時尚藝文空間。</p>";
    }else {
        document.getElementById("railContent").innerHTML = "<p>觀眾自捷運淡水信義線（紅線）至中山站下車，於 2 號出口出站後，<br/>步行至，往前行走約 200 公尺，右手邊出現世新資傳畢展看板，<br/>即抵達PPP時尚藝文空間。</p>";
    }
});

$( window ).resize(function() { 
    if($( window ).width() <= 1066){
        document.getElementById("railContent").innerHTML = "<p>觀眾自捷運淡水信義線（紅線）至中山站下車，於 2 號出口出站後，步行至，往前行走約 200 公尺，右手邊出現世新資傳畢展看板，即抵達PPP時尚藝文空間。</p>";
    }else {
        document.getElementById("railContent").innerHTML = "<p>觀眾自捷運淡水信義線（紅線）至中山站下車，於 2 號出口出站後，<br/>步行至，往前行走約 200 公尺，右手邊出現世新資傳畢展看板，<br/>即抵達PPP時尚藝文空間。</p>";
    }
});

//Smooth scroll effect
$('.trafficNav ul li a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();

        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        },800);
    }
});

//scroll to top animation
$('.scrollToTop a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();

        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        },800);
    }
});

//show and hide scroll to top icon
window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.scrollToTop');
    scroll.classList.toggle("active", window.scrollY > 500)
})

//burger animation
function show(){
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('.data').classList.toggle('active');
}