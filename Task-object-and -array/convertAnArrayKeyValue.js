var arry;

function converterObjToArray(obj){	
	if(obj==null){
		console.log("This function shold be given a object as parameter.");
		return;
	}
	if(Array.isArray(obj) || typeof obj != "object"){
		console.log("This function only convert an object to array.");
		return;
	}
	var keys = getKeys(obj);
	var values = getValues(obj);
	var length = keys.length;
	var keysAndValues =[length];
	for(var i=0; i<length;i++){
		keysAndValues[i] = [keys[i], values[i]];
	}
	arry = keysAndValues;
	console.log(keysAndValues);
}

function getValues(obj){
	var values = Object.values(obj);
	return values;
}

function getKeys(obj){
	var keys = Object.keys(obj);
	return keys;
} 