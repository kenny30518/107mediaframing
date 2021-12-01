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

/*$(window).on('load', function(){
	$('html, body').animate({
        scrollTop: $('.start').offset().top
 	},800);
});*/

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

var tl = new TimelineMax(/*{onComplete:scrollDetect}*/)

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
};

//slider background color control
$('.slider' ).on( 'input', function( ) {
	$( this ).css( 'background', 'linear-gradient(to right, #5aa6a5 0%, #5aa6a5 '+this.value +'%, #fff ' + this.value + '%, white 100%)' );
});

//get slider value and convert it to text
function getValue() {
	var x = document.getElementById("s4Slider");
	var currentVal = parseInt(x.value);
	var actualValue;
	if (currentVal == 0) {
		alert('你選擇的咖啡酸度是: 微酸');
	}else if (currentVal == 50) {
		alert('你選擇的咖啡酸度是: 酸');
	}else if (currentVal == 100) {
		alert('你選擇的咖啡酸度是: 濃酸');
	}
}

//section 5 slider value
function getBitterValue() {
	var x = document.getElementById("s5Slider");
	var currentVal = parseInt(x.value);
	var actualValue;
	if (currentVal == 0) {
		alert('你選擇的咖啡酸度是: 微苦');
	}else if (currentVal == 50) {
		alert('你選擇的咖啡酸度是: 苦');
	}else if (currentVal == 100) {
		alert('你選擇的咖啡酸度是: 濃苦');
	}
}





