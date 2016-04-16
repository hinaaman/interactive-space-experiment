var fs = require('fs');
fs.writeFile(__dirname+"/data/test"+"-"+Date.now(), "Hey there!", function(err) {
	if(err) {
		return console.log(err);
	}
	console.log("The file was saved!");
}); 