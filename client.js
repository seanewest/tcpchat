var net = require('net');
var notifier = require('node-notifier');

var ip = "localhost";
if (process.argv.length === 3) {
  ip = process.argv[2];
}

var connection = net.connect({host: ip, port: 3000});
connection.on('data', function(data) {
  var msg = data.toString();
  console.log(msg);
  notifier.notify({
    'title': 'TCP Message',
    'message': data.toString()
  });
});

process.stdin.on('data', function (data) {
  var msg = data.toString().trim();
  connection.write(msg);
});
