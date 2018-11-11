var express = require('express');
var app = express();

const compression = require('compression');
const path = require('path');

app.use(compression());
app.set('port', process.env.PORT || 5000);
app.use(express.static(`${__dirname}/dist/apps/app1`));

app.get('/*', function(req, res) {
  res.sendFile(path.join(`${__dirname}/dist/apps/app1/index.html`));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running at localhost:' + app.get('port'));
});
