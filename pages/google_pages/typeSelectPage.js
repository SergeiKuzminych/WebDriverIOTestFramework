class TypeSelectPage {
    get buttonGoToCart() {
        return $("button[data-test-go-to-cart]");
    }

    getButtonAddByType(type) {
        return $(`div[data-test-product-card="${type}"] button[data-test="atc"]`);
    }
}

export default new TypeSelectPage();