function calcParallax(tileHeight, speedRatio, scrollPosition) {
	return ((tileHeight) - (Math.floor(scrollPosition / speedRatio) % (tileHeight+1)));
}

window.onload = function() {

	window.onscroll = function () {
		var posX = (document.documentElement.scrollLeft)  ? document.documentElement.scrollLeft : window.pageXOffset;
		var posY = (document.documentElement.scrollTop) ? document.documentElement.scrollTop : window.pageYOffset;

		var background = document.getElementById("background");
		var backgroundParallax = calcParallax(1775 * $(window).innerWidth() / 1024, 2, posY);
		background.style.backgroundPosition = "0 " + backgroundParallax + "px";
	}


}