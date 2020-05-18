module.exports = (req, res, next) => {
	console.log('eval redirect');
	if (req.user) res.redirect('/surveys');
};
