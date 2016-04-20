jQuery(document).ready(function($) {

	var $overlay = $('<div class="overlay"></div>');
	var $image = $('<img>');
	var $caption = $('<p> </p>');


	//Add Image and appened to overlay.
	$overlay.append($image);

	//Add caption to overlay
	$overlay.append($caption);

	//Add overlay
	$("body").append($overlay);







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
		var captionText = $(this).children('img').attr('alt');
		$caption.text(captionText);
	});



	//When overlay is clicked
	$overlay.click(function(event) {
		//Hide the overlay
		$(this).hide();
	});




});