const express = require('express');
const session = require('express-session');
// const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 3000; // Default port is 3000

// Do NOT use hard coded for prduction environment. It is advisable to secret from environment or a file(ignored in git).
const SECRET = process.env.PORT || 'c9csAzb7uTSg69VsgSzDHZSd6pqYs3qnoI9OsBbAwUBQQEnMEMG8lZtMj9ky';

app.set('view engine', 'pug')
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

app.use(session({
	cookie: {
		maxAge: 1000 * 60 * 60 * 24, // Two Hours
		sameSite: true,
	},
	name: 'session_id',
	secret: SECRET,
	resave: false,
	saveUninitialized: false
}));

app.use(require('connect-flash')());

app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});


app.get('/',(_, res) => {
	res.render('index',{
		session:{
			name:"Omkar",
		},
	})
});

app.get('/login',(req,res) => {
	// req.flash("info", "Email queued");
	res.render('login.pug');
});

app.get('/signup', (req, res) => {
	res.render('signup');
});

app.post('/login',(req,res) => {
});

app.post('/signup',(req,res) => {
	console.log(req.body)
});

app.post('/logout', (req, res) => {
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
