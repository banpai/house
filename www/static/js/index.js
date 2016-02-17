//修改插值表达式
avalon.config({
    interpolate: ["[%","%]"]
});

$.getJSON("/static/js/json/house.json",function(data){
		vm.data = data;
    vm.h_data = vm.data.house_0;
});

//avalon定义变量
var vm = avalon.define({
  $id:"home",
  name:"1111",
  data:{},
  index:0,
  h_data:{},
  up:function(){
    if(vm.index > 0){
      vm.index = vm.index - 1;
      var x = "house_"+vm.index;
      vm.h_data = vm.data[x];
    }else{
      vm.h_data = vm.data.house_0;
      tusi("没有了！！！");
    };
  },
  down:function(){
    if(vm.index < 3){
      vm.index = vm.index + 1;
      var x = "house_"+vm.index;
      vm.h_data = vm.data[x];
    }else {
      vm.h_data = vm.data.house_3;
      tusi("没有了！！！")
    }
  }
});

/**
 * 吐丝信息框
 * @param txt
 * @returns
 */
function tusi(txt,fun){
	$('.tusi').remove();
	var div = $('<div style="background: rgba(111,117,239,0.7);max-width: 85%;min-height: 77px;min-width: 270px;position: absolute;left: -1000px;top: -1000px;text-align: center;border-radius:10px;"><span style="color: #ffffff;line-height: 77px;font-size: 23px;">'+txt+'</span></div>');
	$('body').append(div);
	div.css('zIndex',9999999);
	div.css('left',parseInt(($(window).width()-div.width())/2));
	var top = parseInt($(window).scrollTop()+($(window).height()-div.height())/2);
	div.css('top',top);
	setTimeout(function(){
		div.remove();
    	if(fun){
    		fun();
    	}
	},2000);
}
