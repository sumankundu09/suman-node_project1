const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;	// process.env contains all the environment variables in it. We are taking PORT from it to grab dynamically. If not set, use 3000.

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

app.listen(port, () => {
	console.log('Server has started the port.');
});
