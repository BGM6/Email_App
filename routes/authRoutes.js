const passport = require('passport');

module.exports = app => {
	//GOOGLE ROUTES
	app.get('/auth/google/', passport.authenticate('google', {
			scope: ['profile', 'email']
		}, (err, user) => {
			if (err) throw err;
			console.log(user);
		}
	));

	app.get(
		'/auth/google/callback',
		passport.authenticate('google'),
		(req, res) => {
			res.redirect('/surveys');
		}
	);

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};


