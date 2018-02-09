const fs = require('fs')
const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
var cors = require('cors')
const resolve = (file) => path.resolve(__dirname, file)
const app = express()

var options = {
    origin: true,
    credentials: true
  };
app.use(cors(options));
app.set('port', (process.env.port || 8080))
app.use(favicon(resolve('dist/favicon.ico')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/dist', express.static(resolve('dist')))

app.get('*', function (req, res) {
  // const html = fs.readFileSync(resolve('dist/' + 'WEBGL-DEMO.html'), 'utf-8');
  const html = fs.readFileSync(resolve('dist/' + 'WEBGL-DEMO.html'), 'utf-8');
  res.send(html)
})

app.listen(app.get('port'), function () {
  console.log('Visit http://localhost:' + app.get('port'))
})
