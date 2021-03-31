import Base_PO from './Base_PO';

class Main_PO extends Base_PO {
	open() {
		super.open('/');
	}

	get contactUsLink() {
		return $('#contact-us');
	}
}

export default new Main_PO();
