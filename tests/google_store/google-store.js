import SearchResultsPage from "../../pages/google_pages/searchResultsPage"
import AccessoriesPage from "../../pages/google_pages/accessoriesPage"
import ProductPage from "../../pages/google_pages/productPage"
import TypeSelectPage from "../../pages/google_pages/typeSelectPage";
import CartPage from "../../pages/google_pages/cartPage";
import chance from "chance"
import productsData from "../../test_data/google-products.json";
import { expect } from "chai";

describe('Google Store Practical Task #1', () => {
  productsData.products.forEach((product) => {
    it(`Task #1: ${product.name}`, () => {
      AccessoriesPage.open();
      AccessoriesPage.performSearch(product.name);
      SearchResultsPage.getProductByDocId(product.id).click();
      ProductPage.buttonBuy.click();
      
      let cartProductName;
      let price;
      if (product.types) {
        let type = chance().pickone(product.types);
        cartProductName = `${product.name} ${type.color}`;
        price = type.price.toFixed(2);
        TypeSelectPage.getButtonAddByType(type.color).click();
        TypeSelectPage.buttonGoToCart.click();
      } else {
        cartProductName = product.name;
        price = product.price.toFixed(2);
      }
      CartPage.addedProductsNames.then((productNames) => {
        expect(productNames).toHaveText(cartProductName);
      });
      CartPage.subtotalPrice.then((subtotalPrice) => {
        expect(subtotalPrice).toHaveText(`$${price}`);
      });
      CartPage.addedProductsPrices.then((productPrices) => {
        expect(productPrices).toHaveText(`$${price}`);
      });
      CartPage.addedProductQuantity.then((productQuantity) => {
        expect(productQuantity).toHaveAttr('data-selected-quantity', '1');
      });
    });
  });
});

describe('Google Store Practical Task #2', () => {
  let product = chance().pickone(productsData.products);
  let cartProductName;
  let price;

  before(() => {
    AccessoriesPage.open();
    AccessoriesPage.performSearch(product.name);
    SearchResultsPage.getProductByDocId(product.id).click();
    ProductPage.buttonBuy.click();

    if (product.types) {
      let type = chance().pickone(product.types);
      cartProductName = `${product.name} ${type.color}`;
      price = type.price.toFixed(2);
      TypeSelectPage.getButtonAddByType(type.color).click();
    } else {
      cartProductName = product.name;
      price = product.price.toFixed(2);
      CartPage.addedProductsNames.then((productNames) => {
        expect(productNames).toBeDisplayed();
      });
    }
  });
  

  it(`Task #2: ${product.name}`, () => {
    CartPage.open();

    CartPage.addedProductsNames.then((productNames) => {
      expect(productNames).toHaveText(cartProductName);
    });
    CartPage.subtotalPrice.then((subtotalPrice) => {
      expect(subtotalPrice).toHaveText(`$${price}`);
    });
    CartPage.addedProductsPrices.then((productPrices) => {
      expect(productPrices).toHaveText(`$${price}`);
    });
    CartPage.addedProductQuantity.then((productQuantity) => {
      expect(productQuantity).toHaveAttr('data-selected-quantity', '1');
    });

    CartPage.addedProductQuantity.then((addedProductQuantity) => {
      addedProductQuantity.setValue("2");
    });
    
    CartPage.subtotalPrice.then((subtotalPrice) => {
      expect(subtotalPrice).toHaveText(`$${(price * 2).toFixed(2)}`);
    });
    CartPage.addedProductQuantity.then((productQuantity) => {
      expect(productQuantity).toHaveAttr('data-selected-quantity', '2');
    });
  });
});