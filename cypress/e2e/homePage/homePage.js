import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

// Background
Given('the user is on the home page', () => {
	cy.visit('/index.php?route=common/home');
    cy.url().should('include', '/home')
    cy.wait(2000)
    
})

// ========================================================================================================================

// Scenario: Verify Elements on Home Page
Then('the user should see the site logo', () => {
	cy.get('#entry_217821 > .figure > a > .figure-img').should('be.visible')
})

And('the user should see the navigation menu', () => {
	cy.get('#entry_217831 > .entry-section').should('be.visible')
})

And('the user should see featured products', () => {
	cy.get('.product-thumb').should('have.length.greaterThan', 0)
})

And('the user should see the footer', () => {
	// cy.get('#footer').should('be.visible');
})

// ========================================================================================================================

// Scenario: Navigate to Login Page
When('the user clicks on the "Login" link', () => {
	// cy.contains('My account').last().click({ force: true });
	cy.get('.mz-sub-menu-96.dropdown-menu')
		.find('li')
		.contains('Login')
		.click({ force: true })
})

Then('the user should be redirected to the login page', () => {
	cy.url().should('include', 'account/login')
})

And('the user should see the login form', () => {
	cy.get('#account-login').should('be.visible')
})

// ========================================================================================================================

// Scenario: Navigate to Product Details Page
When('the user clicks on a featured product', () => {
	cy.get('.product-thumb').eq(6).click()
})

Then('the user should be redirected to the product details page', () => {
	cy.url().should('include', 'product/product&')
	cy.title().should('eq', 'HTC Touch HD');
})
And('the user should see product details', () => {
	cy.get('#entry_216807 > .entry-section').should('be.visible');
	cy.get('.h3').should('be.visible').and('have.text', 'HTC Touch HD');
	cy.get('#image-gallery-216811 > .image-thumb > .thumbnail > .img-fluid',).should('be.visible');
	cy.get('.price-new').should('be.visible').and('have.text', '$146.00');
})

// ========================================================================================================================

// Scenario: Search for a Product
When('the user enters a search query', () => {
	cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input')
        .type('HTC Touch HD');
    cy.get('.dropdown-menu').should('have.length', 7).should('contain', 'HTC Touch HD')
})

And('the user clicks the search button', () => {
	cy.get('.type-text').click();
    cy.wait(2000);
})

Then('the user should see search results', () => {
	cy.get('.product-layout').should('have.length', 8).should('contain', 'HTC Touch HD')
})

And('the user should be able to navigate to a product from the search results', () => {
    cy.get('.product-layout').eq(2).click();
    cy.get('.h3').should('be.visible').and('have.text', 'HTC Touch HD');
	cy.get('#image-gallery-216811 > .image-thumb > .thumbnail > .img-fluid',).should('be.visible');
	cy.get('.price-new').should('be.visible').and('have.text', '$146.00');

})

// ========================================================================================================================

// Scenario: View Shopping Cart
When('the user clicks on the shopping cart icon', () => {
    cy.visit('/index.php?route=account/login');
    cy.get('#input-email').type('naufalazhar65@gmail.com');
    cy.get('#input-password').type('naufal354');
    cy.get('form > .btn').click();
    
    // for add product to cart
    // cy.get('.product-action').find('.cart-107').first().click({ force: true });

    cy.get('#entry_217825 > .cart > .cart-icon')
        .find('.cart-item-total').should('contain', '1')
	cy.get('#entry_217825 > .cart > .cart-icon').click({ force: true });
	cy.contains('Cart').should('be.visible');
    cy.contains('Sub-Total:').should('be.visible');
    cy.contains('Total').should('be.visible');
    cy.get(':nth-child(2) > .text-right > strong').should('be.visible');
    cy.get('#entry_217850 > .icon-right').should('have.text', '  Edit cart');
    cy.get('#entry_217851 > .icon-right').should('have.text', '  Checkout');
    cy.get('#entry_217850 > .icon-right').click();
    cy.wait(2000)
})

Then('the user should be redirected to the shopping cart page', () => {
    // cy.get('.product-action').find('.cart-107').first().click({ force: true });
    cy.get('#checkout-cart').should('be.visible');    
})

And('the user should see the added products in the cart', () => {
    cy.get('.table-responsive')
        .find('thead tr')
        .should('contain', 'Image')
        .and('contain', 'Product Name')
        .and('contain', 'Model')
        .and('contain', 'Quantity')
        .and('contain', 'Unit Price')
        .and('contain', 'Total');
});

// ========================================================================================================================

// Scenario: View Special Offers
// When('the user clicks on the "Special Offers" link', () => {
//     //a
// })

// Then('the user should be redirected to the special offers page', () => {
//     //a
// })

// And('the user should see special offers listed', () => {
//     //a
// })
