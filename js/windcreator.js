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

//setTimeOut refresh
/*let time = new Date().getTime();
const setActivityTime = (e) => {
   time = new Date().getTime();
}
document.body.addEventListener("mousemove", setActivityTime);
document.body.addEventListener("keypress", setActivityTime);

const refresh = () => {
   if (new Date().getTime() - time >= 60000) {
      window.location.reload(true);
   } else {
      setTimeout(refresh, 10000);
   }
}

setTimeout(refresh, 10000);*/

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

tl.fromTo(".start h1",0.7,{
	autoAlpha: 0
},{
	autoAlpha: 1
},"+=0.5");

tl.to(".start h1",0.7,{
	autoAlpha: 0
},"+=0.2");

tl.fromTo(".introFirst",0.7,{
	autoAlpha: 0
},{
	autoAlpha: 1
},"+=0.2");

tl.fromTo(".introSecond",0.7,{
	autoAlpha: 0
},{
	autoAlpha: 1
},"+=0.2");

tl.fromTo(".s1 a",0.7,{
	autoAlpha: 0
},{
	autoAlpha: 1
},"+=0.2");

function scrollDetect(){
	$('html, body').on('scroll touchmove mousewheel', function(e) {
        $('html, body').animate({
            scrollTop: $('.s2').offset().top
        },800);
        $('html, body').off('scroll touchmove mousewheel');
	});
}

$('.s1 a').on('click', function() {
	$('html, body').off('scroll touchmove mousewheel');
})

//section 3 radio control
$(document).ready(function(){
	$('.s3Check input[type="radio"]').change(function(){
  
    	if(this.checked){
			$('.s3Check input[type="radio"]').not(this).prop('checked', false);
    	}
	});
});

//section 7 radio control
$(document).ready(function(){
	$('.s7Check input[type="radio"]').change(function(){
		if(this.checked){
			$('.s7Check input[type="radio"]').not(this).prop('checked', false);
    	}

    	var cup = $('.s7Check input[type="radio"]:checked').val();
    	if (cup == "milk") {
    		$('.cup-mug').css('opacity', '1');
    		$('.cup-glass').css('opacity', '0');
    		$('.cup-beer').css('opacity', '0');
    	}else if (cup == "glass") {
    		$('.cup-mug').css('opacity', '0');
    		$('.cup-glass').css('opacity', '1');
    		$('.cup-beer').css('opacity', '0');
    	}else if (cup == "beer") {
    		$('.cup-mug').css('opacity', '0');
    		$('.cup-glass').css('opacity', '0');
    		$('.cup-beer').css('opacity', '1');
    	}
	});
});

function getGender() {
	var gender = $('.gender:checked').val();
	if (gender == "M") {
		return '你';
	}else if (gender == "F") {
		return '妳';
	}else if (gender == "O") {
		return '獨特的你';
	}
}

//slider background color control
$('.slider' ).on( 'input', function( ) {
	$( this ).css( 'background', 'linear-gradient(to right, #5aa6a5 0%, #5aa6a5 '+this.value +'%, #fff ' + this.value + '%, white 100%)' );
});

//get slider value and convert it to text
function getSour() {
	var x = document.getElementById("s4Slider");
	var currentVal = parseInt(x.value);
	if (currentVal == 0) {
		return '微酸/';
	}else if (currentVal == 50) {
		return '酸/';
	}else if (currentVal == 100) {
		return '濃酸/';
	}
}

//section 5 slider value
function getBitterValue() {
	var x = document.getElementById("s5Slider");
	var currentVal = parseInt(x.value);
	if (currentVal == 0) {
		return '微苦/';
	}else if (currentVal == 50) {
		return '苦/';
	}else if (currentVal == 100) {
		return '濃苦/';
	}
}

//section 6 slider value
function getCupValue() {
	var cup = $('.cup:checked').val();
	if (cup == "milk") {
		return ['創意馬克杯', '冒險與創意'];
	}else if (cup == "glass") {
		return ['透明玻璃杯', '質感與浪漫'];
	}else if (cup == "beer") {
		return ['豪邁啤酒杯', '熱血與故事'];
	}
}

//section 7 radio value
function getCaffeineValue() {
	var x = document.getElementById("s6Slider");
	var currentVal = parseInt(x.value);
	if (currentVal == 0) {
		return ['低', '不受拘束且自由的靈魂，<br/>容易親近'];
	}else if (currentVal == 50) {
		return ['中', '不過分張揚的努力型天才，<br/>是大家永遠依靠'];
	}else if (currentVal == 100) {
		return ['高', '做事有原則的邏輯鬼才，<br/>享受獨處時光'];
	}
}

//section 8 text value
function send() {
	var currentVal = $('#coffeeName').val();
	if (currentVal == '') {
		alert('請輸入名稱!');
	}else {
		$('.result').html(generateResult());

		$('.coffeeTitle').html(currentVal + ' 咖啡');

		var cup = getCupValue();
		var cupType = cup[0];
		var cupResult = cup[1];
		$('.cupType').html(cupType);

		var caffeine = getCaffeineValue();
		var caffeineLevel = caffeine[0];
		var caffeineResult = caffeine[1];
		$('.flavor').html('酸度-' + getSour() + '風味-' + getBitterValue() + '咖啡因含量-' + caffeineLevel);

		$('.final').html(getGender() + '是' + caffeineResult + '，且生活充滿' + cupResult + '。');
		$('html, body').animate({
            scrollTop: $('.s9').offset().top
        },800);
	}
}

let results = ['一個華麗的轉身就會捲起一陣輕風，<br/>預測不久之後遙遠的他方會有颶風。',
			   '走路帶風，凡是經過任何地方，<br/>風力都能把身邊的人吹起來逆時針轉三個圈。',
			   '臉朝下撲街的時候，會由下往上揚起一陣風，<br/>路過的人都會察覺，然後被塵土嗆到。',
			   '打排球準備殺球時，<br/>手向下揮動所產生的風，足以拍飛三個大學生。',
			   '在公司或學校放屁，<br/>風力所傳遞的氣味，可以貫穿整個101。',
			   '心情不好時嘆了一口氣所產生的風，會成為上升氣流；<br/>如果讓上帝聽見，祂會為你哭泣。'];

function generateResult() {
	var result = results[Math.floor(Math.random()*results.length)];
	return result;
}

