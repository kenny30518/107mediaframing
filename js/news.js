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

//expend
const moreButton = document.querySelector('.more-button');
moreButton.addEventListener('click', function(){
    document.querySelector('.more-text').classList.toggle('show');
    document.querySelector('.more-button').classList.toggle('show');
    document.querySelector('.dots').classList.toggle('show');
    document.querySelector('.close').classList.toggle('show');
})

//close
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', function(){
    document.querySelector('.more-text').classList.toggle('show');
    document.querySelector('.more-button').classList.toggle('show');
    document.querySelector('.dots').classList.toggle('show');
    document.querySelector('.close').classList.toggle('show');
})

//expend2
const moreButton2 = document.querySelector('.more-button2');
moreButton2.addEventListener('click', function(){
    document.querySelector('.more-text2').classList.toggle('show');
    document.querySelector('.more-button2').classList.toggle('show');
    document.querySelector('.dots2').classList.toggle('show');
    document.querySelector('.close2').classList.toggle('show');
})

//close2
const closeButton2 = document.querySelector('.close2');
closeButton2.addEventListener('click', function(){
    document.querySelector('.more-text2').classList.toggle('show');
    document.querySelector('.more-button2').classList.toggle('show');
    document.querySelector('.dots2').classList.toggle('show');
    document.querySelector('.close2').classList.toggle('show');
})

//expend3
const moreButton3 = document.querySelector('.more-button3');
moreButton3.addEventListener('click', function(){
    document.querySelector('.more-text3').classList.toggle('show');
    document.querySelector('.more-button3').classList.toggle('show');
    document.querySelector('.dots3').classList.toggle('show');
    document.querySelector('.close3').classList.toggle('show');
})

//close3
const closeButton3 = document.querySelector('.close3');
closeButton3.addEventListener('click', function(){
    document.querySelector('.more-text3').classList.toggle('show');
    document.querySelector('.more-button3').classList.toggle('show');
    document.querySelector('.dots3').classList.toggle('show');
    document.querySelector('.close3').classList.toggle('show');
})

//expend4
const moreButton4 = document.querySelector('.more-button4');
moreButton4.addEventListener('click', function(){
    document.querySelector('.more-text4').classList.toggle('show');
    document.querySelector('.more-button4').classList.toggle('show');
    document.querySelector('.dots4').classList.toggle('show');
    document.querySelector('.close4').classList.toggle('show');
})

//close4
const closeButton4 = document.querySelector('.close4');
closeButton4.addEventListener('click', function(){
    document.querySelector('.more-text4').classList.toggle('show');
    document.querySelector('.more-button4').classList.toggle('show');
    document.querySelector('.dots4').classList.toggle('show');
    document.querySelector('.close4').classList.toggle('show');
})











