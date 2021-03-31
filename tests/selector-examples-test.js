import Main_PO from '../pages/Main_PO';

describe('Selectors Test', () => {
	beforeEach(() => {
		Main_PO.open();
	});

	it('By ID', () => {
		const clickByIDElement = $('#contact-us');
		clickByIDElement.click();
	});

	it('By Class', () => {
		const clickByClassElement = $('.section-title');
		clickByClassElement.click();
	});

	it('By XPath', () => {
		const clickByXPathElement = $('//h1[text()="CONTACT US"]/../..');
		clickByXPathElement.click();
	});

	it('By CSS', () => {
		const clickByCSSElement = $('#contact-us h1');
		clickByCSSElement.click();
	});
});
