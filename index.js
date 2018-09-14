let express = require('express');
let app = express();
let bodyParser = require('body-parser');
const PORT = '3000';
let fs = require('fs');
var path = require('path');
let route=require('./route');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use('/api/v1',route);





app.listen(PORT, () => {
    console.log('I am listening to the port ' + PORT);
});