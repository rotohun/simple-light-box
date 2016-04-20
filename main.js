jQuery(document).ready(function($) {

	var $overlay = $('<div class="overlay"></div>');
	var $image = $('<img>');

	$overlay.append($image);

	//Add overlay
		$("body").append($overlay);
		//Add Image.
		//A Caption	





	//Capture click event on a link to an Image.
	$('#imageGallery a').click(function(e) {
		e.preventDefault();
		var href = $(this).attr('href');

		console.log(href);

		//Update the overlay with the image linked in the link.
		$image.attr('src', href);

		//Show overlay.
		$overlay.show();

		//Get childs alt attribute and add it to the caption.
	});



	//When overlay is clicked
		//Hide the overlay



});