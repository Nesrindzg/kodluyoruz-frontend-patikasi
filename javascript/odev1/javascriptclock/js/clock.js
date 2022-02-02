let myName=document.querySelector("#myName");
let myClock=document.querySelector("#myClock");

let namePrompt=prompt("Adınızı Giriniz:");
myName.innerHTML=`${namePrompt}`;

function printDate () {
	const date=new Date();
	let day;
	switch (date.getDay()) {
		case 1:
			day="Pazartesi";
			break;
		case 2:
			day="Salı";
			break;
		case 3:
			day="Çarşamba";
			break;
		case 4:
			day="Perşembe";
			break;
		case 5:
			day="Cuma";
			break;
		case 6:
			day="Cumartesi";
			break;	
		case 7:
			day="Pazar";
			break;
	}
	myClock.innerHTML= `
					${date.getHours()} :
					${date.getMinutes()} :
					${date.getSeconds()} :
					${day} <br>
					${date.getDate()}. 
					${date.getMonth()+1}. 
					${date.getFullYear()}`;
}
					
setInterval(printDate,1000);
