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
  index:1,
  string:{
    len:"",
    u_name:"",
    u_pass:"",
    username:"半拍",
    usersign:"学习学习再学习！",
    con_name:"联系"
  },
  username:"",qq:"",mail:"",telephone:"",zhenjian:"",born:"",pass:"",r_pass:"",sign:"",
  ms_if:{denlu:true,userinfo:false,connection:false,h_right:true,h_sign:false,h_content:false},
  submit:function(){
    if(vm.string.u_name=="半拍" && vm.string.u_pass=="123"){
      vm.ms_if.denlu = false;
      vm.ms_if.userinfo = true;
      vm.ms_if.connection = true;
    }else{
      tusi("用户名或密码错误！");
    }
  },
  signin:function(){vm.ms_if.h_right = false;vm.ms_if.h_sign = true;},
  zhuce_submit:function(){
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
            vm.ms_if.h_right = true;
            vm.ms_if.h_sign = false;
            vm.ms_if.h_content = false;
          }else{
            tusi("参数错误！！！");
          };
        }
    });
  },
  zhuce_clear:function(){vm.ms_if.h_right = true;vm.ms_if.h_sign = false;},
  connect:function(){
    if(vm.ms_if.connection == false){
      tusi("请先登录！");
    }else{
      if(vm.string.con_name == "联系"){
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
        vm.ms_if.h_right = false;
        vm.ms_if.h_sign = false;
        vm.ms_if.h_content = true;
        vm.string.con_name = "返回";
      }else{
        vm.ms_if.h_right = true;
        vm.ms_if.h_sign = false;
        vm.ms_if.h_content = false;
        vm.string.con_name = "联系";
      };
    };
  },
  flag:function(el){return (el.id == vm.index)?true:false;},
  up:function(){(vm.index > 1)?vm.index = vm.index - 1:tusi("没有了！！！");},
  down:function(){(vm.index < vm.len)?vm.index = vm.index + 1:tusi("没有了！！！");}
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
