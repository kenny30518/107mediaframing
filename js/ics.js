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

//scroll out animation
ScrollOut({
	targets: '.content_image,.intro h2,.intro h3'
});

window.addEventListener('scroll', function(){
	var scroll = document.querySelector('.scrollToTop');
	scroll.classList.toggle("active", window.scrollY > 500)
})

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





