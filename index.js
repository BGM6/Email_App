require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cookieSession = require('cookie-session');
const passport = require('passport');
const PORT = process.env.PORT || 5000;
require('./models/User');
require('./services/passport');

const app = express();

//MongoDB
connectDB().then(() => console.log('MongoDB Connected...'));

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Cookie-Session Code
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000, //This is 30 days
		keys: [process.env.COOKIE_KEY]
	})
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));