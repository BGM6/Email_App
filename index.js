require('dotenv').config();
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const PORT = process.env.PORT || 5000;

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

passport.use(new GoogleStrategy({
	clientID: process.env.GOOGLE_CLIENT_ID,
	clientSecret: process.env.GOOGLE_CLIENT_SECRET,
	callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
	console.log('Access Token:', accessToken);
	console.log('Refresh Token:', refreshToken);
	console.log('Profile:', profile);
}));

app.get('/auth/google/', passport.authenticate('google', {
	scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));