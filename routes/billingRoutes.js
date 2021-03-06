const stripe = require('stripe');

const requireLogin = require('../middleware/requireLogin');
const keys = require('../config/keys');

const stripeClient = stripe(keys.stripeSecretKey);

module.exports = (app) => {
	app.post('/api/stripe', requireLogin, async (req, res) => {
		await stripeClient.charges.create({
			amount: 500,
			currency: 'usd',
			description: '$5 for 5 credits',
			source: req.body.id,
		});

		req.user.credits += 5;
		const user = await req.user.save();

		res.send(user);
	});
};
