var config = require('../config/main-config');
import ContactUs_PO from '../pages/ContactUs_PO';

describe('Contact Us Challenge Test', () => {
	it('Navigate to webdriveruniversity homepage and Assert title and URL', () => {
		browser.url('/');

		const url = browser.getUrl();
		const title = browser.getTitle();

		expect(title).to.equal('WebDriverUniversity.com');
		expect(url).to.equal('http://webdriveruniversity.com/');
	});

	it('Click on the contact us button.', () => {
		ContactUs_PO.open();
	});

	it('Switch to the new tab window.', () => {
		browser.switchWindow('WebDriver | Contact Us');
	});

	it('Submit all required fields.', () => {
		browser.pause(2000);
		ContactUs_PO.firstNameField.setValue(config.firstName);
		ContactUs_PO.lastNameField.setValue(config.lastName);
		ContactUs_PO.emailField.setValue('john_smith@mail.com');
		ContactUs_PO.commentsField.setValue('Hello, World!');
	});

	it('Click on the submit button.', () => {
		ContactUs_PO.submitForm();
	});

	it('Assert URL contains the correct text after a successful contact submission. ', () => {
		const url = browser.getUrl();
		const thankYouMessage = $('#contact_reply h1');
		thankYouMessage.waitForDisplayed(3000);
		expect(url).to.contain('contact-form-thank-you');
	});
});
