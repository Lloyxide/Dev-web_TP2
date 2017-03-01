function dogDogDog(){


  var audioDog = new Audio('audio/dog.mp3');
  audioDog.play();

  $('#doggy').css("display", "none");

  $('.dogInc').each(function (){
    $(this).prop("src","images/dog.gif");
    $(this).css({"width": "auto", "position": "fixed", "border-bottom" : "none"});
  });

  setInterval(function(){
    $('.dogInc').each(function (){

      var randomtop = Math.floor(Math.random() * ($(window).height() - $(this).height() - 20));
      var randomleft = Math.floor(Math.random() * ($(window).width() - $(this).width() - 20));

      $(this).css('top', randomtop + 'px');
      $(this).css('left', randomleft + 'px');

      var rand = Math.floor((Math.random() * 3) + 1);
      switch(rand){
        case 1 : $(this).toggleClass("monster1"); break;
        case 2 : $(this).toggleClass("monster2"); break;
        case 3 : $(this).toggleClass("monster3"); break;
      }
    });
  }, 500);

}



function menuMobile(){
  if(document.getElementById("top_right_menu").style.display == "block")
  document.getElementById("top_right_menu").style.display = "none";
  else
  document.getElementById("top_right_menu").style.display = "block";
}

window.ondevicemotion = function(event){
  var aX = event.accelerationIncludingGravity.x;
  var aY = event.accelerationIncludingGravity.y;
  //console.log(aX + " " + aY);
  $("#acceX").html(aX);
  $("#acceY").html(aY);
  /*$('.dogInc').each(function (){
    $(this).css({"-webkit-transform": "rotate(45deg)", "-moz-transform": "rotate(45deg)", "-o-transform": "rotate(45deg)", "transform": "rotate(45deg)"});
  }*/
}
