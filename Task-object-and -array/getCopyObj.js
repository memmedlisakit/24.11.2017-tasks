function getCopyObj(obj){
	if(obj==null){
		console.log("This function shold be given a object as parameter.");
		return;
	}
	var copyobj = {};
	var keys = getkeys(obj);
	for(var i=0; i < keys.length;i++){
		copyobj[obj[keys[i]]] = keys[i];
	}
	return copyobj;
} 


function getkeys(obj){
	var keys = Object.keys(obj);
	return keys;
}
