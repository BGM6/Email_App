require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	const user = await User.findById(id);
	done(null, user);
});

//GOOGLE STRATEGY
passport.use(
	new GoogleStrategy({
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: '/auth/google/callback',
		},
		async (accessToken, refreshToken, profile, done) => {

			const existingUser = await User.findOne({googleId: profile.id});
			if (existingUser) {
				return done(null, existingUser);
			}

			const user = await new User({googleId: profile.id}).save();
			done(null, user);
		}));

// User.findById(id)
// 	.then(user => {
// 		done(null, user);
// 	});

// passport.use(new GoogleStrategy({
// 	clientID: process.env.GOOGLE_CLIENT_ID,
// 	clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// 	callbackURL: '/auth/google/callback',
// }, (accessToken, refreshToken, profile, done) => {
// 	User.findOne({googleId: profile.id}).then(existingUser => {
// 		if (existingUser) {
// 			done(null, existingUser);
// 		} else {
// 			new User({googleId: profile.id}).save()
// 				.then(user => done(null, user));
// 		}
// 	});
// }));