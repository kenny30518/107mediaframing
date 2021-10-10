/*

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
});*/

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

//change section 2 content by screen width
$( window ).resize(function() { 
	if($( window ).width() <= 1366){
		document.querySelector(".s2 .text p").innerHTML = "《人造風向Media Framing》意即資傳系的學生創造資訊、網站及影像，以輕快、活潑、亮眼的形象進入大眾視野，帶來明確、新穎的資訊，同時也是引領著十二個風向的風場！最終引發觀眾們產生「新的觀點，新的風向」。";
	}else {
		document.querySelector(".s2 .text p").innerHTML = "《人造風向Media Framing》意即資傳系的學生創造資訊、<br>網站及影像，以輕快、活潑、亮眼的形象進入大眾視野，<br>帶來明確、新穎的資訊，同時也是引領著十二個風向的風場！<br>最終引發觀眾們產生「新的觀點，新的風向」。";
	}
});

//Smooth scroll effect
$('.lower a').on('click', function(e){
	if(this.hash !== ''){
		e.preventDefault();

		const hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		},800);
	}
});

//scroll out animation
ScrollOut({
	targets: '.s2 .text h2,.s2 .text p,.client-in li'
});

//scroll to top animation
window.addEventListener('scroll', function(){
	var scroll = document.querySelector('.scrollToTop');
	scroll.classList.toggle("active", window.scrollY > 500)
})

function scrollToTop(){
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
}


/*
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
*/












