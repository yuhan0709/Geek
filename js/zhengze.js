$(document).ready(function(){
	$('.find').click(function(){
		$('.search p').show();
	})

	$('.result').click(function(){
		var str = $('.find').val();
		var ret = /^[\u4e00-\u9fa5]+$/ ;
      	if(ret.test(str)){
      		Show(str);
      	}else{
        	alert('请重新输入');
      	}
      	
	});
	var num = $('.collage td').length;
	var i=0;
	function Show(obj){
		if(i==num){
			i = 0;
		}
		$('.first').html(obj);
		$('.collage td').eq(i)
				.html(obj);
		i++;
	}	
	
})