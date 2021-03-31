import Base_PO from './Base_PO';

class IFrame_PO extends Base_PO {
	open() {
		super.open('/IFrame/index.html');
	}

	get iFrameElement() {
		return $('#frame');
	}

	get findOutMoreButton() {
		return $("//*[text()='Our Products']");
	}
}

export default new IFrame_PO();
