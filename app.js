var express = require('express');
var moment = require('moment');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/:input', function(req, res) {
  var timestamp = {unix: null, natural: null};
  var time = moment(req.params.input, ['MMMM D YYYY', 'MMMM D, YYYY', 'X'], true);

  if (time.isValid()) {
    timestamp.unix = time.unix();
    timestamp.natural = time.format('MMMM D, YYYY');
  }

  res.send(timestamp);
});

app.listen(app.get('port'), function() {
  console.log('Listening on port ' + port + '...');
});
