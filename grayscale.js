$(function() {
  	$(".circle").addClass("grayscale");    
    $(".circle").click(function(){
    	$(this).removeClass("grayscale");
      $(".circle").not(this).not(".grayscale").addClass("grayscale");            
    });
});

// Mitch Flower Power 
//Click run on the top left to run the application and it should pop up in the bottom right
//Click each circle for color change, When you click another color the color that is on will be grayed
//This is just a basic idea of what you are looking for, can get more indepth with images and whatever
//Thanks Bak_HS