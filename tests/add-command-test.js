import LoginPortal_PO from '../pages/LoginPortal_PO';

describe('Add command & Chai assertions', () => {
	beforeEach(() => {
		LoginPortal_PO.open();
	});

	it('Test webdriveruni using chai with new added command', () => {
		//const loginPageTitle = browser.getTitle();
		//const loginPageUrl = browser.getUrl();
		const loginPageData = browser.getUrlAndTitle();

		expect(loginPageData.title).to.be.equal('WebDriver | Login Portal');
		expect(loginPageData.url).to.contain('Login-Portal');
	});
});
