$(function(){
  $('.minimized').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><figure><img src="'+i_path+'"></figure><div id="close-popup"><i></i></div></div>');
    // $('#magnify').css({
	    // left: ($(document).width() - $('#magnify').outerWidth())/2,
	    //top: ($(window).height() - $('#magnify').outerHeight())*4
	  // });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
 
    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});




// top: ($(document).height() - $('#magnify').outerHeight())/3

// top: ($(window).height() - $('#magnify').outerHeight())*4