

//slider//
$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//preloader//
var preloader = document.getElementById('preloader');
window.addEventListener("load", function(){
	const loader = document.querySelector(".loading");
	loader.className += " hidden";
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

//scroll animation//
let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline.to(".front", 5, {
	y: 300,
	autoAlpha: 0
})
.to(".back", 5, {
	y: 200,
	autoAlpha: 0
},'-=3')
.to(".front", 5, {
	y: 0
})
.to(".back", 3, {
	y: 0
})
.to(".text", 3, {
	autoAlpha: 0
},"-=3")
.to(".s3", 3, {
	top: '200%'
},'-=3');

let scene = new ScrollMagic.Scene({
	triggerElement: ".section2",
	duration: "100%",
	triggerHook: 0
})
.setTween(timeline)
.setPin(".section2")
.addTo(controller);

//burger animation//
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
	y: -10,
	rotation: -225,
	ease: Expo.easeInOut,
	delay: -0.8
});

tl.to(".menu", 0.5, {
	left:"0%",
	ease: Expo.easeInOut,
	delay: -1
});

tl.staggerFrom(".menu ul li", 1,{
	x: -200,
	rotation: -10,
	opacity: 0,
	ease: Expo.easeInOut,
	delay: -1
},0.3);

tl.reverse();
$(document).on("click", ".rwdBurger", function() {
		tl.reversed(!tl.reversed());
});

//slider//
$(document).ready(function(){

	$('.pictures').slick({
	  dots: false,
	  arrows: false,
	  centerMode: true,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  centerPadding: '60px',
	  slidesToShow: 3,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});
});













