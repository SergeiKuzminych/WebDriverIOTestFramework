import AjaxLoader_PO from '../pages/AjaxLoader_PO';

describe('Test various WDIO Wait Commands', () => {
	beforeEach(() => {
		AjaxLoader_PO.open();
	});

	it('Test waitForExist', () => {
		AjaxLoader_PO.clickMeButton.waitForExist(10000);
		try {
			AjaxLoader_PO.clickMeButton.click();
		} catch (error) {
			console.log("couldn't click CLICK ME! me button");
		}
	});

	it('Test waitForDisplayed', () => {
		AjaxLoader_PO.clickMeButton.waitForDisplayed(10000);
		AjaxLoader_PO.clickMeButton.click();
	});

	it('Test waitForEnabled', () => {
		AjaxLoader_PO.clickMeButton.waitForEnabled(2000);
	});
});
