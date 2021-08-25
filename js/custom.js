//preloader//
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".loading").style.visibility = "visible";
    } else {
        document.querySelector(".loading").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};

/*var tl = new TimelineMax();

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
});*/

new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	navigation: true,
	anchors:['section1','section2','section3'],
	navigationTooltips: ['Home','Introduce','About us'],
	showActiveTooltip: true,
	scrollOverflow: true,

	afterLoad: function(origin, destination, direction){
		var loadedSection = this;

		if(destination.index == 1){
			var loading1 = new TimelineMax();
			loading1.fromTo(".s2 .container h2",0.7,{ 
					autoAlpha: 0,
					x:20
				},{
					autoAlpha: 1,
					x:0
				})
			.fromTo(".s2 .container p",0.7,{
					autoAlpha: 0,
					x:20
				},{
					autoAlpha: 1,
					x:0
				})
			; 
		}
	},

	onLeave: function(origin, destination, direction){ 
    	var leavingSection = this;

    	if(destination.index == 1){
    		var loading1 = new TimelineMax();
	    	loading1.to(".s2 .container h2",0.1,{ 
						opacity: 0
					})
					.to(".s2 .container p",0.1,{
						opacity: 0,
					},"-=0.1")
				; 
		}
    }
});

var tl = new TimelineMax({paused: true});

tl.to(".one",0.8,{
	y: 6,
	rotation: 45,
	ease: Expo.easeInOut
});

tl.to(".two",0.8,{
	y: -6,
	rotation: -45,
	ease: Expo.easeInOut,
	delay: -0.8
});

tl.to(".three",0.8,{
	y: -18,
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
$(document).on("click", ".toggle-btn", function() {
  tl.reversed(!tl.reversed());
});

$(document).on("click", ".data ul li a", function() {
  tl.reversed(!tl.reversed());
});














