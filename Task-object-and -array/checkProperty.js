
var komputer ={
	ram:"8GB",
	hardisk:"1TB",
	screen:"17lcd",
	cpu:"CORE i7 intel"
}

function checkProperty(obj, prop){
	if(obj==null||prop==null){
		console.log("This function should be given two parameters first object second \"property\"");
		return;
	}	
	if(obj.hasOwnProperty(prop) == true){
		var key = prop;
		console.log("This object has the "+prop+" property \""+obj[key]+"\"");
	}else{
		console.log("This object doesn't have the \'"+prop+"\' property ! ! !");
	}
}

 
