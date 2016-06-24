var Express = require('express');
var compression = require('compression');
var path = require('path');

var app = new Express();
var port = process.env.PORT || 8881;
app.use(compression());
app.use(Express.static(path.join(__dirname,"node_modules/react/dist/")));
app.use(Express.static(path.join(__dirname,"node_modules/react-dom/dist/")));
app.use(Express.static(path.join(__dirname,"docs" )));

app.listen(port);
console.log(`Server is listening to port: ${port}`);

