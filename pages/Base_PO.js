export default class Base_PO {
	open(path) {
		browser.url(path);
		browser.setWindowSize(1800, 1000);
	}
}
