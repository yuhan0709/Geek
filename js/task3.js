window.onload=function(){
var first = document.getElementById('first');
var last = document.getElementById('last');
var next = document.getElementById('next');
var end = document.getElementById('end');
var content = document.getElementById('content');
var now = document.getElementById('now');
var change_num = document.getElementById('change_num');
var i = 0;
//创建新的XMLHttpRequest对象
	var xhr;
	if (window.XMLHttpRequest){
//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    	xhr=new XMLHttpRequest();
	}else{
// IE6, IE5 浏览器执行代码
    	xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}
//连接服务器
	xhr.open('get','http://rapapi.org/mockjsdata/14169/geek','true');
//发送请求
    xhr.send(null);
//处理服务器响应
	xhr.onreadystatechange=function(){
    	var txt = JSON.parse(xhr.responseText);  //把json字符串获取为原生javascript值；
    	if(txt.status == 1){
//请求成功
    	var num = txt.list.length;
		click(0);
//点击事件
  	 	function click(e){
    		content.innerHTML = txt.list[e];
    		var n = e+1;
    		now.innerHTML = "当前"+n+'/'+num+"页";
    		i=e;
    	}
//点击首页
    	first.onclick = function(){
    		click(0);
    };
//点击尾页
   		end.onclick = function(){
   		click(num-1);
	};
//向前翻页
		last.onclick = function(){
			if(i == 0){
				alert('已经是第一页了！');
				click(1);
			}
		   click(--i)
	};
//向后翻页
        next.onclick = function(){
        	if(i == num-1){
        		alert('已经是最后一页了！');
        		click(num -2);
        	}	
        	click(++i);
    };
//点击按钮跳转页面
    change_num.onclick = function(){
        var nm= document.getElementById('num').value;
        if(nm>num||num<0){
            alert('您输入的页码不存在，请重新输入');
        }else{
        click(nm-1);
        }
        document.getElementById('num').value = '';
    };
}else{
    	alert('请求失败');
    	}
	};
};
