const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const Request = require('request');
const pug = require('pug');

const app = express();

app.set('views', '../public');
app.set('view engine', 'pug');

// if the extended is set to false you can't have 'nasted object'
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
	res.render('index');
});

app.post('/', (req, res) => {
	const api = 'http://www.omdbapi.com/?';
	const key = '&apikey=9b59e017';
	let title = 's=';
	title += body;
	let body = req.body;
	console.log(title);
	let film = JSON.parse(body);
	res.render('show', {film:film});
})

app.listen(3000, ()=> console.log('server listening on port 3000'));