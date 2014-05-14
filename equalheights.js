/**
 *	Equal Heights
 *	By Justin Hedani
 *	Requires: jQuery
 *	Make all your elements the same height!
 */
(function ( $ ) {
	$.fn.equalHeights = function() {
		var equalHeightObjects = this;
		var largestHeight = 0;
		// Iterate through each object and find the larget height.
		equalHeightObjects.each( function(i) {
			var currentObjectHeight = $(this).height();
			// Set a value on the first pass.
			if ( i  == 0 ) {
				largestHeight = currentObjectHeight;
			} else {
				// if the current height is larger than the largest height, replace largest height with current.
				if ( currentObjectHeight > largestHeight ) {
					largestHeight = currentObjectHeight;
				}
			}
		});
		// Apply the heights to the objects
		equalHeightObjects.each( function() {
			$(this).height( largestHeight );
		});
	}; // $.fn.equalHeights
}( jQuery ));
