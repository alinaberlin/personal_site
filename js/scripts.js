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
// init google map
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 52.5322419, lng: 13.4671},
    zoom: 8
  });
}
