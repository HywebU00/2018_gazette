// JavaScript Document

// 新增自訂項目
$(function(){
	//點選 新增自訂項目 按鈕 打開選單項目
	$('.Customer_Setting > .Control_BTN > a.btn').click(function(){
		//alert('123');
		$(this).parent('.Control_BTN').next('.Content').find('.Type_Name').slideToggle(0);
		$(this).parent('.Control_BTN').next('.Content').find('.AA').slideToggle(0);
		return false;
	})
});

// 主選單scroll top 固定
$(function(){
	$(window).load(function(){
		$(window).bind('scroll resize', function(){
			var $this = $(this);
			var $this_Top=$this.scrollTop();
			var x = $(window).width();

			if( x>767){
				//當高度 <42時，#Header回到原位
				if($this_Top < 42){
					$('#Header').stop().animate({top:"0px"},300);
					$('#Header .navbar').css('box-shadow','none');
				}
				//當高度 >42時，#Header上移42
				if($this_Top > 42){
					$('#Header').stop().animate({top:"-42px"},300);
					$('#Header .navbar').css('box-shadow','0px 4px 10px rgba(20%,20%,40%,0.3)');
				}
			}else{
				//手機版的話，#Header固定
				//$('#Header').css('position','fixed');
			}
	　　}).scroll();
	});
});

// slick 自訂
$(function(){
	// Multiple_slider
	$('.Multiple_slider').slick({
		dots: true,
		//dotsClass: 'slick-number', 原點可以換成數字
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		slidesToShow: 1, //一次顯示幾張
		slidesToScroll: 1 //一次輪播幾張
	});

	// Responsive_slider
	$('.Responsive_slider').slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		responsive: [{
			breakpoint: 900,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		}, {
			breakpoint: 720,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});
});

// slick 上下則按鈕 title
$(function(){
    var weblang = $('html').attr('lang');
    if (weblang.substring(0,2) == 'zh') {
        // console.log("中文");
        $('.slick-prev').attr('title', '前一則');
        $('.slick-next').attr('title', '後一則');
    } else if (weblang.substring(0,2) == 'en') {
        // console.log("英文");
        $('.slick-prev').attr('title', 'previous');
        $('.slick-next').attr('title', 'next');
    }
});


// 送select選單內容至select框內
$(function(){
	$('.search-panel .dropdown-menu').find('a').click(function(e) {
		e.preventDefault();
		var param = $(this).attr("href").replace("#","");
		var concept = $(this).text();
		$('.search-panel span#search_concept').text(concept);
		$('.input-group #search_param').val(param);
	});
});

// 左右主選單 點一個秀一個
$(function(){
	$('#Header .navbar-header .pull-right').click(function(){
		$(this).parent().siblings().eq(1).removeClass('in');
	});

	$('#Header .navbar-header .pull-left').click(function(){
		$(this).parent().siblings().eq(0).removeClass('in');
	});
})

// Open Fatfooter
$(function(){
	//Fatfooter 內容收合
	$(".FatFooterBtn").click(function() {
        $('#FatFooter>div>nav>ul>li>ul').slideToggle(function() {
            if ($(this).is(':visible')) {
                document.getElementById("FatFooterBtn").value = "收合";
            } else {
                document.getElementById("FatFooterBtn").value = "展開";
            }
        });
        $(this).toggleClass('close');
    });
	//第三重 內容收合
    $("#FatFooter nav ul ul span.switch").click(function(){
		$(this).next('ul.AA').slideToggle(600);
	})
})

// Go Top
// $(function(){
// 	$('#GoTop').click(function(){
// 		$('html,body').animate({scrollTop:0},900);
// 		return false;
// 	})
// })


$(function(){

	// 置頂go to top
	$(window).bind('scroll', function() {
	    if ($(this).scrollTop() > 200) {
	        $('.scrollToTop').fadeIn();
	    } else {
	        $('.scrollToTop').fadeOut();
	    }
	});

	// click event to scroll to top
	$('.scrollToTop').click(function(e) {
	    $('html, body').animate({ scrollTop: 0 }, 800);
	    e.preventDefault();
	});
	$('.scrollToTop').keydown(function(e) {
	    $('body').find('a:first').focus();
	    e.preventDefault();
	});
});

/*-----------------------------------*/
///////////////置頂go to top////////////
/*-----------------------------------*/
// $(window).bind('scroll', function() {
//     if ($(this).scrollTop() > 200) {
//         $('.scrollToTop').fadeIn();
//     } else {
//         $('.scrollToTop').fadeOut();
//     }
// });
/*-----------------------------------*/
/////click event to scroll to top//////
/*-----------------------------------*/
// $('.scrollToTop').click(function(e) {
//     $('html, body').animate({ scrollTop: 0 }, 800, 'easeOutExpo');
//     e.preventDefault();
// });
// $('.scrollToTop').keydown(function(e) {
//     _body.find('a:first').focus();
//     e.preventDefault();
// });


// Tab 阿尼的寫法 RWD
$(function(){
   $('.options li.here .contents').show();
  
   //點到頁籤後
   // $('.options>li>a').focus(function(){
   $('.options>li>a').click(tabs);
   $('.options>li>a').focus(tabs);//因為無障礙要可以使用鍵盤點選，所以用focus的設定
	  
	function tabs(){
		var  li_index=$(this).index();
		$('.options .here').removeClass('here');
		$(this).parent().addClass('here');
		return false;
	}
})

// scrollUp 自訂  
// $(function () {
// 	$.scrollUp({
// 	    scrollName: 'scrollUp', // Element ID
// 	    topDistance: '300', // Distance from top before showing element (px)
// 	    topSpeed: 300, // Speed back to top (ms)
// 	    animation: 'fade', // Fade, slide, none
// 	    animationInSpeed: 200, // Animation in speed (ms)
// 	    animationOutSpeed: 200, // Animation out speed (ms)
// 	    scrollText: 'Scroll to top', // Text for element
// 	    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
// 	});
// });


// 字級
// $(function(){
// 	$(".Word-Class .FontSmall").click(
// 		function(){
// 			$(".ContentPage").css({fontSize:"90%"});
// 			$(".PopBox .Block_Title").css({fontSize:"16px"});
// 			$(".PopBox .Block_Text").css({fontSize:"13px"});
// 			$("#FatFooter").css({fontSize:"90%"});
// 			$("#FatFooter .Title").css({fontSize:"90%"});
// 			$("h1").css({fontSize:"30px"});
// 			$("h2").css({fontSize:"26px"});
// 			$("h3").css({fontSize:"20px"});
// 			$("h4").css({fontSize:"16px"});
// 			$("h5").css({fontSize:"11px"});
// 			$("h6").css({fontSize:"11px"});
// 			/*$(".Block0 .MainLink ul li a").css({fontSize:"1em"});*/
// 			$("#Header .navbar #offcanvas-right ul.nav.White > li a").css({fontSize:"0.9em"});
// 			return false;
// 			}
// 	)
// 	$(".Word-Class .FontMidium").click(
// 		function(){
// 			$(".ContentPage").css({fontSize:"100%"});
// 			$(".PopBox .Block_Title").css({fontSize:"18px"});
// 			$(".PopBox .Block_Text").css({fontSize:"15px"});
// 			$("#FatFooter").css({fontSize:"100%"});
// 			$("#FatFooter .Title").css({fontSize:"18px"});
// 			$("h1").css({fontSize:"32px"});
// 			$("h2").css({fontSize:"2.2em"});
// 			$("h3").css({fontSize:"26px"});
// 			$("h4").css({fontSize:"20px"});
// 			$("h5").css({fontSize:"13px"});
// 			$("h6").css({fontSize:"13px"});
// 			/*$(".Block0 .MainLink ul li a").css({fontSize:"1.2em"});*/
// 			$("#Header .navbar #offcanvas-right ul.nav.White > li a").css({fontSize:"1em"});
// 			return false;
// 			}
// 	)
// 	$(".Word-Class .FontLarge").click(
// 		function(){
// 			$(".ContentPage").css({fontSize:"110%"});
// 			$(".PopBox .Block_Title").css({fontSize:"20px"});
// 			$(".PopBox .Block_Text").css({fontSize:"17px"});
// 			$("#FatFooter").css({fontSize:"110%"});
// 			$("#FatFooter .Title").css({fontSize:"22px"});
// 			$("h1").css({fontSize:"43px"});
// 			$("h2").css({fontSize:"36px"});
// 			$("h3").css({fontSize:"30px"});
// 			$("h4").css({fontSize:"23px"});
// 			$("h5").css({fontSize:"19px"});
// 			$("h6").css({fontSize:"17px"});
// 			/*$(".Block0 .MainLink ul li a").css({fontSize:"1.4em"});*/
// 			$("#Header .navbar #offcanvas-right ul.nav.White > li a").css({fontSize:"1.2em"});
// 			return false;	
// 			}
// 	)
// 	$('.Word-Class').find('a').on('click' , function(){
// 		$('.Word-Class a').removeClass('active');
// 		$(this).addClass('active');
// 	})
// })

// dropdownHover
$(function(){
	$('.js-activated').dropdownHover().dropdown();
});


// nav
$(function () {
	$('ul.nav').children('li.dropdown').keyup(
		function(){
			$(this).children().show();
			$(this).siblings().focus(function(){
				$(this).hide()
			});
		});
	$('ul.nav').children('li.dropdown').keyup(	
		function(){
			$(this).siblings().children('ul').hide();
		});
	$('ul.nav li.dropdown li:last>a').focusout(
	function(){
		$('ul.nav li.dropdown ul').hide();
	})
});

// FAQ
$(function () {
	$('.FAQ dd').hide();
	$('.FAQ dd:first-of-type').show();
	$('.FAQ dt:first-of-type').addClass("Answerclose");

	$('.FAQ dt').click(function() {
		$('.FAQ dd').slideUp();
		$('.FAQ dt').removeClass("Answerclose");

		$(this).next().slideDown();
		$(this).addClass("Answerclose");
		return false;
	});
});

// fancy box
// $(function(){
//     /* Button helper. Disable animations, hide close button, change title type and content */
//     $('.fancybox-buttons').fancybox({
//         openEffect  : 'none',
//         closeEffect : 'none',

//         prevEffect : 'none',
//         nextEffect : 'none',

//         closeBtn  : false,

//         helpers : {
//             title : {
//                 type : 'inside'
//             },
//             buttons : {}
//         },

//         afterLoad : function() {
//             this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
//         }
//     });
// });







