$(document).ready(function(){ 
  for(var i = 0; i < work.length; ++i ) {
    $("#work").append("\
   <div class='col-sm-6 col-md-3'>\
     <a href='#' class='work-img'>\
     <img class='img-responsive' src='" + work[i].pic + "'>\
     <span class='info'><p class='proj-title'>Title:</p> "+ work[i].title + "</span>\
     </a>\
   </div>\
 ");
 var images = $("#work img");
  if(i%2 === 0){
     $(images[i]).css("border", "2px solid DodgerBlue");
   } else {
     $(images[i]).css("border", "2px solid salmon");
   };
 }
$(".work-img").mouseenter(function(){
   $(".info", this).show();
   }).mouseleave(function(){
   $(".info", this).hide();
   });
});