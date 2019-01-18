var express = require('express');
var app = express();
var db = require('./Database/database');

app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(express.static('public'));
app.use(require('./routes/blog'));

app.get('/', (req,res ) => {
    res.send('the fron page');
});



app.listen(3000, ()=>{
    console.log('listening');
})
