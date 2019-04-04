const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website',
    currentYear: new Date().getFullYear()
  });
});

hbs.registerHelper('getCurrentYear',() =>{
	return new Date().getFullYear()
});

hbs.registerHelper('screamIt',(text) =>{
	return text.toUpperCase();
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});
app.get('/self', (req, res) => {
  res.render('self.hbs', {
    pageTitle: 'self deatils',
    
  });
});
app.get('/academics', (req, res) => {
  res.render('academics.hbs', {
    pageTitle: 'academics',
    
  });
});
app.get('/exzam', (req, res) => {
  res.render('exzam.hbs', {
    pageTitle: 'exzamination  ',
    
  });
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});