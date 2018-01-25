const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', hbs);
app.use(express.static(__dirname + '/public'));	// __dirname represents the root directory name. app.use is used to include a middlewire in place.

app.get('/', (req, res) => {
	res.send({message: 'Hello'});
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		attribute: 'Year',
		value: new Date().getFullYear(),
		val: 'Fishy'
	});
});

app.listen(3000, () => {
	console.log('Server has started at port: 3000.');
});
