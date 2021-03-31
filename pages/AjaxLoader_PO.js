import Base_PO from './Base_PO';

class AjaxLoader_PO extends Base_PO {
	open() {
		super.open('/Ajax-Loader/index.html');
	}

	get clickMeButton() {
		return $('//*[text()="CLICK ME!"]');
	}
}

export default new AjaxLoader_PO();
