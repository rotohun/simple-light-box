jQuery(document).ready(function($) {



	//1. Capture click event on a link to an Image.
	$('#imageGallery a').click(function(e) {
		e.preventDefault();
		var href = $(this).attr('href');

		console.log(href);
		//1.1 Show overlay.
		//1.2 Update the overlay with the image linked in the link.
		//1.3 Get childs alt attribute and add it to the caption.
	});


	//2. Add overlay
		//2.1 Add Image.
		//2.2 A Caption
	//3. When overlay is clicked
		//3.1 Hide the overlay



});