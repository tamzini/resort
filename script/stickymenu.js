
/* ============= Sticky Menu ======================== */

$(window).scroll(function(){
		var $header = $(".header").height();
		  
		if($(this).scrollTop() > $header){
		                 
			$(".nav").addClass("nav-scrolled");
			$(".header").css("display","none");
			}
			
			else {
				$(".nav").removeClass("nav-scrolled");
				$(".header").css("display","block");
			      }
	                });
/* === End of sticky Menu ===== */

/* ========= Nav Menu for Mobile ========= */

$(".menu").click(function(){
	$(".nav li").toggle(1000);
});