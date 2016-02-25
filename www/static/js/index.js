//修改插值表达式
avalon.config({
    interpolate: ["[%","%]"]
});

$.getJSON("home/index/more",function(data){
    vm.h_data = data.data;
    vm.len = data.data.length;
});

//avalon定义变量
var vm = avalon.define({
  $id:"home",
  h_data:[],
  zl:{},
  dm_ms:true,
  dm_say:[],
  index:1,len:"",con_name:"联系",u_name:"",u_pass:"",usersign:"",username:"",qq:"",
  mail:"",telephone:"",zhenjian:"",born:"",pass:"",r_pass:"",sign:"",dm_msg:"",
  ms_if:{denlu:true,userinfo:false,connection:false,h_right:true,h_sign:false,h_content:false},
  fun:{
    //清除注册信息
    zc_clear:function(){
      vm.username="";
      vm.qq="";
      vm.mail="";
      vm.telephone="";
      vm.zhenjian="";
      vm.born="";
      vm.pass="";
      vm.r_pass="";
      vm.sign="";
    },
    //显示隐藏右框
    show_hid:function(x){
      vm.ms_if.h_right = false;
      vm.ms_if.h_sign = false;
      vm.ms_if.h_content = false;
      vm.ms_if[x] = true;
    }
  },
  //用户登录
  submit:function(){
    $.ajax({
        url: "home/index/dl",
        dataType: "json",
        async: true,
        data: {"u_name":vm.u_name,"u_pass":vm.u_pass},
        type: "POST",
        success: function(data) {
          if(data.data != ""){
            vm.username = vm.u_name;
            vm.usersign = data.data;
            vm.ms_if.denlu = false;
            vm.ms_if.userinfo = true;
            vm.ms_if.connection = true;
          }else{
            tusi("用户名或密码错误！");
          }
        }
    });
  },
  //用户注册
  signin:function(){vm.fun.show_hid("h_sign");vm.fun.zc_clear();},
  //注册提交
  zhuce_submit:function(){
    if(vm.pass == vm.r_pass && vm.username.length == 2 && vm.telephone != "" && vm.zhenjian != "" && vm.pass != ""){
      $.ajax({
          url: "home/index/zhuce",
          dataType: "json",
          async: true,
          data: {
            "username": vm.username,
            "qq":vm.qq,
            "mail":vm.mail,
            "telephone":vm.telephone,
            "zhenjian":vm.zhenjian,
            "pass":vm.pass,
            "sign":vm.sign
          },
          type: "POST",
          success: function(data) {
            if(data.data){
              vm.fun.show_hid("h_right");
            }else{
              tusi("参数错误！！！");
            };
          }
      });
    }else if(vm.pass != vm.r_pass){
      tusi("密码不一致！");
    }else if(vm.username.length != 2){
      tusi("用户名两位数字！");
    }else{
      tusi("填写不完整！");
    };
  },
  //注册取消
  zhuce_clear:function(){vm.fun.show_hid("h_right");},
  //联系按钮
  connect:function(){
    if(vm.ms_if.connection == false){
      tusi("请先登录！");
    }else{
      if(vm.con_name == "联系"){
        $.ajax({
            url: "home/index/zl",
            dataType: "json",
            async: true,
            data: { "id": vm.index},
            type: "POST",
            success: function(data) {
              vm.zl = data;
            }
        });
        vm.fun.show_hid("h_content");
        vm.con_name = "返回";
      }else{
        vm.fun.show_hid("h_right");
        vm.con_name = "联系";
      };
    };
  },
  //右框图文轮播
  flag:function(el){return (el.id == vm.index)?true:false;},
  //上一个按钮
  up:function(){
    if(vm.index > 1){
      vm.index = vm.index - 1;
      bp_dm();
    }else {
      tusi("没有了！！！");
    };
  },
  //下一个按钮
  down:function(){
    if(vm.index < vm.len){
      vm.index = vm.index + 1;
      bp_dm();
    }else {
      tusi("没有了！！！");
    };
  },
  dm_open:function(){
    if(vm.dm_ms == false){
      $(".tm").toggle("slow");
      vm.dm_ms = true;
    };
  },
  dm_close:function(){
    if(vm.dm_ms == true){
      $(".tm").toggle("slow");
      vm.dm_ms = false;
    };
  },
  dm_send:function(){
    if(vm.ms_if.connection == false){
      tusi("请先登录！");
    }else{
      if(vm.dm_msg != ""){
        var xx = {"msg":vm.dm_msg};
        vm.dm_say.push(xx);
        $.ajax({
            url: "home/index/adddm",
            dataType: "json",
            async: true,
            data: {"msg":vm.dm_msg,"id":vm.index,"name":vm.u_name},
            type: "POST",
            success: function(data) {
              if(data.result != "0"){
                tusi("存储失败！");
              }
            }
        });
        vm.dm_msg = "";
      }
    };
  }
});

//弹幕初始化
function bp_dm(){
  $.ajax({
      url: "home/index/dm",
      dataType: "json",
      async: true,
      data: { "id": vm.index},
      type: "POST",
      success: function(data) {
        vm.dm_say = data.data;
      }
  });
  init_screen();
};
bp_dm();
//弹幕动画
function rangeRandom(start,end){
  return Math.floor(Math.random()*(end-start+1))+start;
};
function randomColor(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  return "rgb("+0+","+0+","+0+")";
};
function init_screen(){
  var _top = 0;
  $(".tm").find("div").show().each(function(){
    var _left = 1024 + 100;
    var _height = 563;
    _top = _top +50;
    if (_top >= _height - 100) {
      _top = 0;
    };
    $(this).css({left:_left,top:_top,color:randomColor()});
    var time = rangeRandom(10000,20000);
    $(this).animate({left:'-'+500+'px'},time,function(){
      init_screen();
    });
  });
}


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
