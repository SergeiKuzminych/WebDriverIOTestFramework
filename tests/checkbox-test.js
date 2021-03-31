import Checkboxes_PO from '../pages/Checkboxes_PO';

describe('isExisting, isSelected and isDisplayed commands', () => {
	beforeEach(() => {
		Checkboxes_PO.open();
	});

	it('Validate state of checkbox', () => {
		expect(Checkboxes_PO.option1Checkbox.isExisting()).to.be.true;
		expect(Checkboxes_PO.option1Checkbox.isSelected()).to.be.false;
		expect(Checkboxes_PO.option1Checkbox.isDisplayed()).to.be.true;
	});
});
