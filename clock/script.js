var digits =["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
var signs =["second", "minut", "hour"];



function clock(){
	document.write('<div class="clock">');
		for(var i=0;i<signs.length;i++){
			document.write('<div class="'+signs[i]+'">');
				document.write('<div></div>');
				document.write('<div></div>');
			document.write('</div>');
		}	 	
		document.write('<div class="center"></div>');
		for(var i=0; i<digits.length;i++){
			document.write('<span>'+digits[i]+'</span>');
		}
	document.write('</div>');
}

			
clock();
 


 function timeSecond(){
 	var secondSign = document.querySelector(".second");
 	var second = new Date(); 	
 	var deg = second.getSeconds()*6+90;
 	secondSign.style.transform ="rotate("+deg+"deg)";
};
timeSecond();
window.setInterval(timeSecond, 1000);





function timeMinut(){
	var minutSign = document.querySelector(".minut");
	var minut = new Date();
	var deg = minut.getMinutes()*6+90;
	minutSign.style.transform ="rotate("+deg+"deg)";
}

timeMinut();
window.setInterval(timeMinut, 1000);



function timeHour(){
	var hourSign = document.querySelector(".hour");
	var hour = new Date();
	var deg = hour.getHours()*12+45;
	hourSign.style.transform ="rotate("+deg+"deg)";
}

timeHour();
window.setInterval(timeHour, 1000);
