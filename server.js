var net = require('net');

var connections = [];

var server = net.createServer(function(connection) {
  connection.on('data', function(data) {
    process.stdout.write(data);
    connections.forEach(function(elem) {
      if (elem !== connection) {
        elem.write(data);
      }
    })
  });

  connections.push(connection);
});

server.listen(3000);
