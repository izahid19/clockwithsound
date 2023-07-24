let randomChange = document.getElementById("randomChange");
images = ['images/image1.jpg','images/image2.jpg','images/image3.jpg','images/image4.jpg','images/image5.jpg','images/image6.jpg','images/image7.jpg'];

let imgCount =  images.length;

let number = Math.floor(Math.random() * imgCount);

window.onload = function(){

	randomChange.style.backgroundImage = "url("+images[number]+")";
}


function show_clock(){

	let h = document.getElementsByClassName('hr')[0];
	let m = document.getElementsByClassName('mn')[0];
	let s = document.getElementsByClassName('ss')[0];

	let date = new Date(); 

	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	h.style.transform = `rotate(${30 * hours + minutes/2}deg)`;
	m.style.transform = `rotate(${6 * minutes}deg)`;
	s.style.transform = `rotate(${6 * seconds}deg)`;

	let sound = new Audio('sound.mp3');
	sound.play();
}


setInterval(show_clock, 1000);