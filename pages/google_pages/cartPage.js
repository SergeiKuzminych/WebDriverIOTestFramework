import $ from "webdriverio/build/commands/browser/$";

class CartPage {
    open() {
        browser.url('https://store.google.com/us/cart');
		browser.setWindowSize(1800, 1000);
    }

    get addedProductsNames() {
        return $("a[data-test-lineitem-title]");
    }

    get addedProductsPrices() {
        return $("p[data-test-line-item-price]");
    }

    get addedProductQuantity() {
        return $("select[data-test-item-qty-selection]");
    }

    get subtotalPrice() {
        return $("span[data-test-price-subtotal]");
    }
}

export default new CartPage();