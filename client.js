var net = require('net');
var ip = "localhost";

var connection = net.connect({host: ip, port: 3000});
connection.on('data', function(data) {
  process.stdout.write(data.toString());
});

process.stdin.on('data', function (data) {
  connection.write(data)
});
