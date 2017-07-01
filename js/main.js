
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
(function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
$(document).ready(function(){
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
  });

  // Stellar
  $.stellar();

  // Tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  //Event listener for contact button
  $("#button").on("click", function() {
    var comment = $('.message-box').val();
    $('#visible-comment').html(comment);
    if( comment === "") {
      $(".message-box").css("border-color", "red");
    }
    else 
    $('.message-box').hide();
    return false;
  });
});


$(".message-box").on("keyup", function() { 
  console.log("keyup happened"); //here we make sure we're catching the keyup
  var charCount = $(".message-box").val().length;
        // in here is where the rest of our code for this Exercise will go   =
console.log(charCount);
$("#char-count").html(charCount); 
if(charCount > 50) {
      $("#char-count").css("color", "red");
} else {
       // need it to be black
       $("#char-count").css("color", "black");
};
 
});