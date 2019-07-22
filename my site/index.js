
$(".projects").mouseover(function(){
  $(".projects").addClass("hovered");
});


$(".projects").mouseout(function(){
  $(".projects").removeClass("hovered");
});


$(".projects").click(function(){
  $(".links").fadeToggle();
});
