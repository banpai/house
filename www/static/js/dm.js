var dm = {
  rangeRandom:function(start,end){
    return Math.floor(Math.random()*(end-start+1))+start;
  },
  randomColor:function(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb("+0+","+0+","+0+")";
  },
  init_screen:function(){
    var _top = 0;
    $(".tm").find("div").show().each(function(){
      var _left = 1024 + 100;
      var _height = 563;
      _top = _top +50;
      if (_top >= _height - 100) {
        _top = 0;
      };
      $(this).css({left:_left,top:_top,color:dm.randomColor()});
      var time = dm.rangeRandom(10000,20000);
      $(this).animate({left:'-'+500+'px'},time,function(){
        dm.init_screen();
      });
    });
  }
};
dm.init_screen();
