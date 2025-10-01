exports.tellDateET = function(){
	let timeNow = new Date();
	const dayNamesET = ["pühap.", "esmasp.", "teisip.", "kolmap.", "neljap.", "reede", "laup."];
	const monthNamesET = ["jan", "veb", "mar", "apr", "mai", "jun", "jul", "aug", "sept", "okt", "nov", "dets"];
	//return timeNow;
	return "täna on " + dayNamesET[timeNow.getDay()] + " " + timeNow.getDate() + ". " + monthNamesET[timeNow.getMonth()] + ". " + timeNow.getFullYear();
}