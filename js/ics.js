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


var tl = new TimelineMax();

tl.fromTo(".wavy",0.5,{
	autoAlpha: 1,
	ease: Expo.easeInOut
},{
	autoAlpha: 0,
	ease: Expo.easeInOut
});

tl.to(".loading",0.5,{
	autoAlpha: 0,
	top: "-100%",
	ease: Expo.easeInOut
});

//burger animation
function show(){
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('.data').classList.toggle('active');
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

//scroll out animation
ScrollOut({
	targets: '.content_image,.intro h2,.intro h3'
});

//change section 4 image when screen resize
$(window).on('load', function(){
    if($( window ).width() <= 768) { 
    $(".s4 .s4_image img").attr("src","image/fan.svg");
}else {
    $(".s4 .s4_image img").attr("src","image/response.svg");
}
});

$( window ).resize(function() {
    if($( window ).width() <= 768) { 
        $(".s4 .s4_image img").attr("src","image/fan.svg");
    }else {
        $(".s4 .s4_image img").attr("src","image/response.svg");
    }
});



