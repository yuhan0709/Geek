$(document).ready(function(){
	$('.slider_photo li:not(:first)').hide();
	$('.slider_page a:first').css('background','#B1AEA8');
	var num = $('.slider_page a').length;
	var change_num = 0;
	var timestop = null;
	function shownow(n){
		$('.slider_photo li').eq(n)
				.fadeIn(2000)
				.siblings('.slider_photo li')
				.fadeOut(0);
		$('.slider_page a').eq(n)
		        .css('background','#B1AEA8')
		        .siblings()
		        .css('background','#675E53');
		
	}
	function auto(){
		if(change_num == num-1){
			change_num = -1;
		}
			shownow(change_num+1);
			change_num++;
	}
	function automove(){
		timestop = setInterval(auto,4000);
	}
	  automove();
	function stop(){
		clearInterval(timestop);
    }
	$('.lefta').click(function(){
		stop();
		if(change_num == 0){
 			change_num = num;
 		}
			shownow(change_num-1);
			change_num--;
	})
	$('.righta').click(function(){
		stop();
		if(change_num == num-1){
			change_num = -1;
		}
			shownow(change_num+1);
			change_num++;
	})
	
	$('.slider_page a').mouseover(function(){
        stop();
		var a = $(this).index();
		// $('.slider_photo li').eq(a)
		//                      .fadeIn(2000)
		//                      .siblings()
		//                      .hide();
		// $(this).css('background','#B1AEA8')
		//        .siblings()
		//        .css('background','#675E53');
		shownow(a);
		change_num = a;
	})
	$('.slider_page a').mouseout(function(){
		automove();
	})
	$('.lefta, .righta').mouseup(function(){
		automove();
	})
});