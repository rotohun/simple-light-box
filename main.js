jQuery(document).ready(function($) {

	var $overlay = $('<div class="overlay"></div>');
	//Add overlay
		$("body").append($overlay);
		//Add Image.
		//A Caption	





	//Capture click event on a link to an Image.
	$('#imageGallery a').click(function(e) {
		e.preventDefault();
		var href = $(this).attr('href');

		console.log(href);
		//Show overlay.
		$overlay.show();
		//Update the overlay with the image linked in the link.
		//Get childs alt attribute and add it to the caption.
	});



	//When overlay is clicked
		//Hide the overlay



});