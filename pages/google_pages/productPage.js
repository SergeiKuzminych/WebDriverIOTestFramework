class ProductPage {
    get buttonBuy() {
        return $('div[data-test="pdp-bar"] button[data-test="cta"]');
    }
}

export default new ProductPage();