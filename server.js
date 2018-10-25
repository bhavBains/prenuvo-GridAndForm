const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen(8080, () => {
  console.log("Your app is running at PORT 8080");
});

app.get('/', (req,res) => {
  res.render('index');
});

app.get('/grid', (req,res) => {
  res.render('grid');
});

app.get('/form', (req,res) => {
  res.render('form');
});

app.post('/form', (req,res) => {
  // Perform the logic here for form data to submit
  res.status(200).redirect('/form');
});