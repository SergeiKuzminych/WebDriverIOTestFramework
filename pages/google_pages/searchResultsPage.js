class SearchResultsPage{
    getProductByDocId(docId) {
        return $(`div.search-results-grid a[href="/product/${docId}"]`);
    }
}

export default new SearchResultsPage();