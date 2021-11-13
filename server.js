const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

app.engine('.hbs', hbs());
app.set('view engine', '.hbs');

// engine config
// res.render('template-file', placeholderValuesObj);

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.render('index',);
});

app.get('/about', (req, res) => {
  res.render('about', { layout: 'dark' });
});

app.get('/contact', (req, res) => {
  res.render('contact',);
});

app.get('/info', (req, res) => {
  res.render('info',);
});

app.get('/history', (req, res) => {
  res.render('history',);
});

app.get('/hello/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

app.get('/hello/:name', (req, res) => {
  res.render('hello', { layout: false, name: req.params.name });
});

app.use((req, res) => {
  res.status(404).send('404 not found...');
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});

