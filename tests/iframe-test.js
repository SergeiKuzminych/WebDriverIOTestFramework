import IFrame_PO from '../pages/IFrame_PO';

describe('IFrame Test', () => {
	beforeEach(() => {
		IFrame_PO.open();
	});

	it('Test the clicking of a given button housed within a IFrame', () => {
		browser.switchToFrame(IFrame_PO.iFrameElement);

		IFrame_PO.findOutMoreButton.waitForDisplayed();
		IFrame_PO.findOutMoreButton.click();
		browser.pause(5000);
	});
});
