require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.use(new GoogleStrategy({
	clientID: process.env.GOOGLE_CLIENT_ID,
	clientSecret: process.env.GOOGLE_CLIENT_SECRET,
	callbackURL: '/auth/google/callback',
}, async (accessToken, refreshToken, profile, done) => {
	const user = new User({googleId: profile.id});
	await user.save();
	// new User({googleId: profile.id}).save().then(r => r);
}));
