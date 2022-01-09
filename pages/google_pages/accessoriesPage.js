class AccessoriesPage {
    open() {
        browser.url('https://store.google.com/us/collection/accessories_wall?hl=en-US');
		browser.setWindowSize(1800, 1000);
    }

    get searchIcon() {
        return $('div[aria-label="Search the Google store"]');
    }

    get searchInput() {
        return $('div[role="search"] input');
    }

    get searchButton() {
        return $('div[search-inner] button[aria-label*="Search"]');
    }

    performSearch(productToSearch) {
        this.searchIcon.click();
        this.searchInput.setValue(productToSearch);
        this.searchButton.click();
    }
}

export default new AccessoriesPage();