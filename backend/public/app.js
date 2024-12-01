const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const app = express();
const port = 5500;

// Configure Handlebars
app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Set EJS as the view engine for `.ejs` files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes for Handlebars and EJS
app.get('/handlebars', (req, res) => {
  res.render('home', { title: 'Handlebars Page', message: 'Hello from Handlebars!' });
});

app.get('/ejs', (req, res) => {
  res.render('home', { title: 'EJS Page', message: 'Hello from EJS!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});