/* eslint-disable no-undef */


var resizeCover = function() {
	var homeCover = document.getElementById( 'homecover-1' );
	var newHeight = document.documentElement.clientHeight -
        document.getElementById( 'navbar-1' ).clientHeight;
	homeCover.style.height = newHeight + 'px';
	homeCover.style.minHeight = newHeight + 'px';
};

document.addEventListener( 'DOMContentLoaded', resizeCover );
window.addEventListener( 'resize', resizeCover );


