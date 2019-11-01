/* eslint-disable class-methods-use-this */
const sendgrid = require('sendgrid');

const sendgridHelper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends sendgridHelper.Mail {
	constructor({ subject, recipients }, content) {
		super();

		this.sgApi = sendgrid(keys.sendGridKey);
		this.from_email = new sendgridHelper.Email('emaily@aragoncodes.com');
		this.subject = subject;
		this.body = new sendgridHelper.Content('text/html', content);
		this.recipients = this.formatAddresses(recipients);

		this.addContent(this.body);
		this.addClickTracking();
		this.addRecipients();
	}

	formatAddresses(recipients) {
		return recipients.map(({ email }) => new sendgridHelper.Email(email));
	}

	addClickTracking() {
		const trackingSettings = new sendgridHelper.TrackingSettings();
		const clickTracking = new sendgridHelper.ClickTracking(true, true);

		trackingSettings.setClickTracking(clickTracking);
		this.addTrackingSettings(trackingSettings);
	}

	addRecipients() {
		const personalize = new sendgridHelper.Personalization();

		this.recipients.forEach((recipient) => {
			personalize.addTo(recipient);
		});
		this.addPersonalization(personalize);
	}

	async send() {
		const request = this.sgApi.emptyRequest({
			method: 'POST',
			path: '/v3/mail/send',
			body: this.toJSON(),
		});

		const response = await this.sgApi.API(request);
		return response;
	}
}

module.exports = Mailer;
