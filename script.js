(function(window){

	var controls = document.getElementById('watch-headline-title');

	var a = document.createElement('a');
	var linkText = document.createTextNode("↗");
	a.appendChild(linkText);

	a.title = "↗";
	a.href = window.location.toString().replace('watch','watch_popup');
	a.style.float = 'right';

	controls.insertBefore(a, controls.firstChild);

})(window);
