const sec= document.querySelector('.sec');
const min = document.querySelector('.min');
const Heure = document.querySelector('.hour'); 

function setDate(){
	const temps = new Date();

	const seconde = temps.getSeconds(); 
	const secondeenDegres = ((seconde / 60)* 360) + 90 ; 
	sec.style.transform = `rotate(${secondeenDegres}deg)`;

	const minute = temps.getMinutes();
    const minuteenDegres = ((minute  / 60) * 360) +(seconde/60*6)+ 90;
    min.style.transform = `rotate(${minuteenDegres}deg)`;

	const hour = temps.getHours(); 
	const hourenDegre=  ((hour / 12) * 360) + ((minute/60)*30) + 90;	
	Heure.style.transform = `rotate(${hourenDegre}deg)`;
	console.log(Heure.style.transform); 
	

}
setInterval(setDate, 1000);

