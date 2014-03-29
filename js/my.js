
$(document).ready(function(){

	$("main .content").addClass("show-main");

	$(function(){
      $("#slides").slidesjs({
        width: 940,
        height: 640,
        pagination: {active: false},
        navigation: {active: false},
        play: {
        	active: true,
		        // [boolean] Generate the play and stop buttons.
		        // You cannot use your own buttons. Sorry.
		    effect: "slide",
		        // [string] Can be either "slide" or "fade".
		    interval: 5000,
		        // [number] Time spent on each slide in milliseconds.
		    auto: true,
		        // [boolean] Start playing the slideshow on load.
		    swap: true,
		        // [boolean] show/hide stop and play buttons
		    pauseOnHover: false,
		        // [boolean] pause a playing slideshow on hover
		    restartDelay: 2500
        }
      });
    });

    function getAsideHeight(){
    	if($(window).width() > 768){
    		var cellHeight = 20;
    	}else{
    		var cellHeight = 32;
    	}
    	var height = ($("#project-list li").length) * cellHeight;
    	return height;
    }

	var menuShow = false;

	var elem = document.getElementById('project-list');

	$(".projects p.link").on("click", function(e){
		e.preventDefault();
		if(elem.className === "hide"){
			$("li.projects ul").height(getAsideHeight());
			$("li.projects ul").addClass("show");
			$("li.projects ul").removeClass("hide");
			shown = true;
		} else if(elem.className === "show"){
			$("li.projects ul").height(0);
			$("li.projects ul").removeClass("show");
			$("li.projects ul").addClass("hide");
			shown = false;
		}
	});

    $(".menu, .clickable, nav a").on("click", function(){
    	if(menuShow === false){
	    	$("aside").addClass("move-right");
	    	$("main, main#home, main#resume, main#about, main#contact, .clickable").addClass("move-right-also");
	    	$(".clickable").show();
	    	menuShow = true;
	    }else if(menuShow === true){
	    	$("aside").removeClass("move-right");
	    	$("main, main#home, main#resume, main#about, main#contact, .clickable").removeClass("move-right-also");
	    	$(".clickable").hide();
	    	menuShow = false;
	    }
    });
});
