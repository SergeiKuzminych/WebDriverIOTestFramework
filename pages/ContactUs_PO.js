import Base_PO from './Base_PO';

class ContactUs_PO extends Base_PO {
	open() {
		super.open('/Contact-Us/contactus.html');
	}

	get firstNameField() {
		return $("//*[@name='first_name']");
	}

	get lastNameField() {
		return $("//*[@name='last_name']");
	}

	get emailField() {
		return $("//*[@name='email']");
	}

	get commentsField() {
		return $("//*[@name='message']");
	}

	get submitButton() {
		return $("//*[@type='submit']");
	}

	submitForm() {
		this.submitButton.click();
	}

	get successfulContactHeader() {
		return $("//*[@id='contact_reply']/h1");
	}
}

export default new ContactUs_PO();
