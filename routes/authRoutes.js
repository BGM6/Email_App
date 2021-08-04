const passport = require('passport');

module.exports = app => {
	app.get('/auth/google/', passport.authenticate('google', {
			scope: ['profile', 'email']
		}, (err, user) => {
			if (err) throw err;
			console.log(user);
		}
	));

	app.get('/auth/google/callback', passport.authenticate('google'));
};


