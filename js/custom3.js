$(document).ready(function(){
  //Size of header the same like windows with resize
  $(".header , .overly").height($(window).height());
  $(window).resize(function(){
      $(".header , .overly").height($(window).height());
  });
  // make intro in the center by jquery
  $(".header .intro").css({
   paddingTop:($(window).height()-$(".header .intro").height())/2,

  });
  //hover on nav by main color
$('.header li a').click(function (){

  $(this).addClass('active').parent().siblings().find('a').removeClass('active');
});
//start scrool to feauters
$(".header .arraw").click(function(){
  $("html,body").animate({
    scrollTop:$(".feauters").offset().top
  },500);
});
// start code smooth scrollTop
$('.header li a').click(function(e){
e.preventDefault();
  $('html,body').animate({
    scrollTop:$('#'+$(this).data('scroll')).offset().top
  },1000)
});
//make fixed nav
$(window).scroll(function(){
  if($(this).scrollTop() > 900)
  {
    $('section').addClass('fix');
  }else {
    {
      $('section').removeClass('fix');
    }
  }
});
// start fixed menu
$(".fixed-menu .fa-angle-double-right").on("click",function(){
  $(this).parent(".fixed-menu").toggleClass("visable-menu");
  if($(this).parent(".fixed-menu").hasClass("visable-menu"))
  {
    $(this).parent(".fixed-menu").animate({
      left : 0
    },800);
    $("body").animate({
    paddingLeft : "220px"
    },800);
  }else{
    $(this).parent(".fixed-menu").animate({
      left : '-220px'
    },800);
    $("body").animate({
      paddingLeft : 0
    },800);
  }
});
});
