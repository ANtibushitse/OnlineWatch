'use strict';

var sec = document.querySelector('.sec');
var min = document.querySelector('.min');
var Heure = document.querySelector('.hour');

function setDate() {
	var temps = new Date();

	var seconde = temps.getSeconds();
	var secondeenDegres = seconde / 60 * 360 + 90;
	sec.style.transform = 'rotate(' + secondeenDegres + 'deg)';

	var minute = temps.getMinutes();
	var minuteenDegres = minute / 60 * 360 + seconde / 60 * 6 + 90;
	min.style.transform = 'rotate(' + minuteenDegres + 'deg)';

	var hour = temps.getHours();
	var hourenDegre = hour / 12 * 360 + minute / 60 * 30 + 90;
	Heure.style.transform = 'rotate(' + hourenDegre + 'deg)';
	console.log(Heure.style.transform);
}
setInterval(setDate, 1000);
