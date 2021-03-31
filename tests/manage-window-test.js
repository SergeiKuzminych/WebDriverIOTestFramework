import Main_PO from '../pages/Main_PO';

describe('Manage Windows', () => {
	beforeEach(() => {
		Main_PO.open();
	});

	it('Switch from homepage to contact us', () => {
		Main_PO.contactUsLink.click();

		console.log('1. FOCUSED TAB TITLE: ' + browser.getTitle());

		browser.switchWindow('WebDriver | Contact Us');

		console.log('2. FOCUSED TAB TITLE: ' + browser.getTitle());
	});

	it('Close homepage window', () => {
		Main_PO.contactUsLink.click();

		console.log('1. FOCUSED TAB TITLE: ' + browser.getTitle());

		browser.closeWindow();

		browser.switchWindow('WebDriver | Contact Us');

		console.log('2. FOCUSED TAB TITLE: ' + browser.getTitle());
	});
});
