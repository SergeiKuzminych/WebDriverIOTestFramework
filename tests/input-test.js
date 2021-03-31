import ContactUs_PO from '../pages/ContactUs_PO';

describe('Test contact us logic via webdriveruni', () => {
	beforeEach(() => {
		ContactUs_PO.open();
	});

	it('Add values to input', () => {
		ContactUs_PO.firstNameField.addValue('Add your text here');
		browser.pause(2000);

		ContactUs_PO.firstNameField.clearValue();
		browser.pause(2000);

		ContactUs_PO.firstNameField.setValue('Hello, World!');
		browser.pause(2000);
	});
});
