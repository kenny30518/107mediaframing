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
function show(){
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('.data').classList.toggle('active');
}

function expend1(){
    document.querySelector('.card p').innerHTML = "近幾年越來越多人關心糧食議題，其中也包含我們常聽見、看見的「小農」。什麼是小農？對於大學生來說，我們關注的是小農哪個面向？我們從大學生愛用的社群 Dcard 中發現，大學生們會在意自己所吃或購買的食物之品質。近年許多大學生前往咖啡廳或是自行購買鮮乳時，會特別選擇小農經典類型的飲品，或有特別標示「小農」、「品質把關」字樣的商品。就像小農鮮乳拿鐵對於大學生的吸引力勝過一般的鮮乳拿鐵！讓我們最新風向帶著大家進入 Dcard 一探大學生與小農之間的關聯吧！";
}

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

$('.book').on('click', function () {
  $(this).toggleClass('book--expanded');
});