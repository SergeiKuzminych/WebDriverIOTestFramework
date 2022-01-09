import LoginPortal_PO from '../pages/LoginPortal_PO';

describe('Add command & ExpectWDIO assertions', () => {
	beforeEach(() => {
		LoginPortal_PO.open();
	});

	it('Test webdriveruni using ExpectWDIO with new added command', () => {
		//const loginPageTitle = browser.getTitle();
		//const loginPageUrl = browser.getUrl();
		const loginPageData = browser.getUrlAndTitle();

		expect(loginPageData.title).toMatch('WebDriver | Login Portal');
		expect(loginPageData.url).toContain('Login-Portal');
	});
});
