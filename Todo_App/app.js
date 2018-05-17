var express = require('express');

var controlar = require('./controlar');

var app = express();

app.set('view-engine', 'ejs');

app.use(express.static('./public'));

controlar(app);



app.listen(3000);

console.log('Server is running...');