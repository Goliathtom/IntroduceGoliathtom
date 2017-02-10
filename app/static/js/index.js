$(document).ready(function(){
	pageResize();
	
	$(window).scroll(function(){
		var position = $(window).scrollTop();
		if(position > 0){
			$("#head_container >nav").css("background-color", "#000");
		}
		else{
			$("#head_container >nav").css("background-color", "transparent");
		}
	});

	$('[data-toggle="tooltip"]').tooltip({
		delay: { "show": 300, "hide": 100 },
		viewport :{ selector: 'body', padding: 20 }
	});
});
$(window).on('resize', pageResize);

function pageResize(){
	var position_top = ($(window).height() /2) - ($("#main-content").height() /2);
	var position_left = ($(window).width() /2) - ($("#main-content").width() /2);
	$("#main-content").css({"top": position_top, "left":position_left});

	setTimeout(pageResize, 0);
}