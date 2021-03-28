const express = require('express');
const expressHandlebars = require('express-handlebars');
const Handlebars = require('handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const path = require('path')
const port = 3000;
const app = express()

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.engine('handlebars', expressHandlebars({
	handlebars: allowInsecurePrototypeAccess(Handlebars)
}))
app.set('view enginer','handlebars')
app.engine('handlebars',expressHandlebars({defaultLayout: 'main'}))

app.use(express.static(path.join(__dirname,'public')))

app.get('/404', (req,res,next)  => {
	res.render('404.handlebars')	
})
app.get('/', (req,res) => {
	res.render('index.handlebars')
})
app.listen(port, () => {
	console.log("aplication listen in http://localhost:"+port);
})

