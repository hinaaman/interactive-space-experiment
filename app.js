var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io',{ rememberTransport: false, transports: ['WebSocket', 'Flash Socket', 'AJAX long-polling']})(server);

var port = process.env.PORT || 3000;
server.listen(port);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/www/space-view.html');
});

app.get('/control-room', function (req, res) {
  res.sendfile(__dirname + '/www/space-control.html');
});

app.get('/paperjs.js', function (req, res) {
  res.sendfile(__dirname + '/www/paperjs/dist/paper-full.min.js');
});

io.on('connection', function (socket) {
  // socket.on('control-draw-rectangle', function (data) {
  // 	console.log("going to broadcast");
  //   socket.broadcast.emit('view-draw-rectangle', data);
  // });
	socket.on('control-update', function (data) {
  		console.log("going to broadcast");
    	socket.broadcast.emit('view-update', data);
  	});

});