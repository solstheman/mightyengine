var $window   = $(window),
	height    = $window.height(),
	width     = $window.width();


  window.onload = function(e) {
	  e.preventDefault();
  }

  function sticky(){
	var scrollTop = $window.scrollTop();
	if (scrollTop > (height - $('#nav_wrap').height())) {
	  $('#nav_wrap').addClass('sticky');
	  $('#nav_wrap').removeClass('not_sticky');
	} else {
	  $('#nav_wrap').removeClass('sticky');
	  $('#nav_wrap').addClass('not_sticky');
	}
  } 
  $window.on('touchmove', sticky);
  $window.on('scroll', sticky);  