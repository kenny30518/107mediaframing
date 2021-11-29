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

$(window).on('load', function(){
	$('html, body').animate({
        scrollTop: $('.start').offset().top
 	},800);
});

$('.s1 a').on('click', function(e){
	if(this.hash !== ''){
        e.preventDefault();

        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        },800);
    }
});

$('.next').on('click', function(e){
	if(this.hash !== ''){
        e.preventDefault();

        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        },800);
    }
});

var tl = new TimelineMax({onComplete:scrollDetect})

tl.fromTo(".start h1",1,{
	autoAlpha: 0
},{
	autoAlpha: 1
},"+=0.5");

tl.to(".start h1",1,{
	autoAlpha: 0
},"+=0.5");

tl.fromTo(".introFirst",1,{
	autoAlpha: 0
},{
	autoAlpha: 1
},"+=0.5");

tl.fromTo(".introSecond",1,{
	autoAlpha: 0
},{
	autoAlpha: 1
},"+=0.5");

tl.fromTo(".s1 a",1,{
	autoAlpha: 0
},{
	autoAlpha: 1
},"+=0.5");

function scrollDetect(){
	$(window).on('wheel', function() {
        $('html, body').animate({
            scrollTop: $('.s2').offset().top
        },800);
		return false;
	});
}









