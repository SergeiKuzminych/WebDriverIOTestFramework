import Base_PO from './Base_PO';

class Checkboxes_PO extends Base_PO {
	open() {
		super.open('/Dropdown-Checkboxes-RadioButtons/index.html');
	}

	get option1Checkbox() {
		return $("//div[@id='checkboxes']//input[@value='option-1']");
	}
}

export default new Checkboxes_PO();
