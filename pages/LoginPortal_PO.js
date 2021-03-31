import Base_PO from './Base_PO';

class LoginPortal_PO extends Base_PO {
	open() {
		super.open('/Login-Portal/index.html');
	}
}

export default new LoginPortal_PO();
