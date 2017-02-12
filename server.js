var express = require('express'),
	app = express();

app.use(express.static(__dirname));

app.listen(process.argv[2],function(){
	console.log('JS30 portal listening on port '+process.argv[2]);
});