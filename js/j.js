$(document).ready(function(){
$(".playm").hover(function(){
    $(".rs>img").addClass( "hvr-grow" );

});
$(".dropdown").hover(
    function() { $('.dropdown-menu', this).stop().fadeIn("fast");
    },
    function() { $('.dropdown-menu', this).stop().fadeOut("fast");
});




$(window).scroll(function(){
    if ($(window).scrollTop() > 100) {
          $(".up").fadeIn().css("display","block")
        }
        else{
            $(".up").fadeOut().css("display","none")
        }
        

});
 $(".up").on("click",function(){
      
     window.scrollTo(0,0);

 })


});
