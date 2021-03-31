import Main_PO from '../pages/Main_PO';
const assert = require('assert');

describe('Test webdriveruni homepage', () => {
	it('Validate whether the webdriveruni homepage title is correct', () => {
		Main_PO.open();
		const title = browser.getTitle();
		assert.strictEqual(
			title,
			'WebDriverUniversity.com',
			"Title doesn't match!"
		);
	});
});
