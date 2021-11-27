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

var states = [
      '#farmColor', '#timeColor', '#ballColor', '#bekiColor', 
      '#templeColor', '#soundColor'
    ],
    
    colors = [
      '#b3bda2', '#D8C4A9', '#DB8662', '#C8BAAA', '#A65C4F', 
      '#74736B'
    ];

function fillMap(state, color, time) {
  setTimeout(
    function() { 
      $(state).css('fill', color);
    }, time
  );
};

$(function() {
    setTimeout(function(){
        for(var i = 0; i < 13; i++) {
            fillMap(states[i], colors[i], (i+1)*500);
        };
    }, 1500);
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

//Floor switch button
$('#secondFloor').on('click',function(){
    $('#secondFloor').css('color','#769E89');
    $('#firstFloor').css('color','transparent');
    document.getElementById('secondFloor').style.pointerEvents = "none";
    var tl2 = new TimelineMax();

    tl2.to(".map2",{
        keyframes: [
            {duration: 0.2, xPercent: 20,},
            {duration: 0.2, yPercent: -20},
        ]
    }).to(".map2",0.2,{
        zIndex: -1
    },"+=1").to(".map2",{
        keyframes: [
            {duration: 0.2, xPercent: 0,},
            {duration: 0.2, yPercent: 20},
        ]
    },"+=0.2").to(".map",{
        keyframes: [
            {duration: 0.2, xPercent: 0,},
            {duration: 0.2, yPercent: -60},
        ]
    },"-=0.2");
    document.getElementById('firstFloor').style.pointerEvents = "all";
});

$('#firstFloor').on('click',function(){
    $('#firstFloor').css('color','#769E89');
    $('#secondFloor').css('color','transparent');
    document.getElementById('firstFloor').style.pointerEvents = "none";
    var tl3 = new TimelineMax();

    tl3.to(".map",{
        keyframes: [
            {duration: 0.2, xPercent: 0,},
            {duration: 0.2, yPercent: 0,},
        ]
    }).to(".map2",0.2,{
        keyframes: [
            {duration: 0.2, xPercent: 20,},
            {duration: 0.2, yPercent: -20},
        ]
    }).to(".map2",{
        zIndex: 1
    },"+=1").to(".map2",{
        keyframes: [
            {duration: 0.2, xPercent: 0,},
            {duration: 0.2, yPercent: 0},
        ]
    },"-=0.2");
    document.getElementById('secondFloor').style.pointerEvents = "all";
});

//pupup menu
$(".btn1").click(function() {
    var href = $(this).attr("href")
    $(href).fadeIn(250);
    $("popup-box").removeClass("transform-out").addClass("transform-in");
    if ($(this).attr('id') == 'farm') {
        $('.intro h2').html("蔬情 Farm In Love");
        $('.leftSide img').attr('src','image/farminlove.png');
        $('#audioC').attr('src','audio/wave.mp3');
        $('#audioE').attr('src','audio/wave.mp3');
    }else if ($(this).attr('id') == 'time') {
        $('.intro h2').html("拾刻．時客 Time Capture");
        $('.leftSide img').attr('src','image/timecapture.png');
        $('#audioC').attr('src','audio/wave.mp3');
        $('#audioE').attr('src','audio/sample.mp3');
    }else if($(this).attr('id') == 'ball') {
        $('.intro h2').html("球生 Reverse by a Ball");
        $('.leftSide img').attr('src','image/reversebyaball.png');
        $('#audioC').attr('src','audio/sample.mp3');
        $('#audioE').attr('src','audio/wave.mp3');
    }else if($(this).attr('id') == 'beki') {
        $('.intro h2').html("袂記 bē kì");
        $('.leftSide img').attr('src','image/beki.png');
        $('#audioC').attr('src','audio/sample.mp3');
        $('#audioE').attr('src','audio/wave.mp3');
    }else if($(this).attr('id') == 'temple') {
        $('.intro h2').html("廟嶼 Temples Island");
        $('.leftSide img').attr('src','image/templesisland.png');
        $('#audioC').attr('src','audio/sample.mp3');
        $('#audioE').attr('src','audio/wave.mp3');
    }else if($(this).attr('id') == 'sound') {
        $('.intro h2').html("留聲跡 Save And Sound");
        $('.leftSide img').attr('src','image/saveandsound.png');
        $('#audioC').attr('src','audio/sample.mp3');
        $('#audioE').attr('src','audio/wave.mp3');
    }
    event.preventDefault();
});

$(".popup-close").click(function() {
    closeWindow();
});

function closeWindow(){
    $(".popup-wrap").fadeOut(200);
    $(".popup-box").removeClass("transform-in").addClass("transform-out");
    event.preventDefault();
}

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

//audio control section
$('.close-btn').on('click', function(){
    $('audio').each(function(){
        $('audio').removeAttr('controls','controls');
        this.pause(); // Stop playing
        this.currentTime = 0; // Reset time
    });
});

function playTour(audioId){
    $('audio').each(function(){
        /*$('audio').removeAttr('controls','controls');*/
        this.pause(); // Stop playing
    });
    $(audioId).attr('controls','controls');
};

/*
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
*/

//burger animation
function show(){
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('.data').classList.toggle('active');
}

$(window).on('load', function(){
    document.querySelector('.map').classList.toggle('active');
    document.querySelector('.map2').classList.toggle('active');
});

/*
//position fixed stop point
function checkOffset() {
    if($('.floor').offset().top + $('.floor').height() >= $('.map').offset().top){
        $('.floor').css('position', 'absolute');
    }
    if($(document).scrollTop() < $('.map').offset().top){
        $('.floor').css('position', 'fixed');
    }
}

$(document).scroll(function() {
    checkOffset();
});
*/

















