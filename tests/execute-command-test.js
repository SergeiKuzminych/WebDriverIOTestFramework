import Main_PO from '../pages/Main_PO';

describe('Inject JS into the target website', () => {
	beforeEach(() => {
		Main_PO.open();
	});

	it('Change webdriveruni background color', () => {
		browser.execute(() => {
			return (document.body.style.backgroundColor = 'red');
		});
		browser.pause(5000);
	});
});
