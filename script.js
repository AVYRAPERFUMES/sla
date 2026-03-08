// Functionality updates for script.js

// 1) Open checkout page in new window when buy button is clicked
function openCheckout() {
    window.open('checkout.html', '_blank');
}

document.getElementById('buy-button').addEventListener('click', openCheckout);

// 2) Show items in shopping cart
function showCart() {
    const cartItems = getCartItems(); // Assume this function fetches items from the cart
    console.log('Cart Items:', cartItems);
    // Display the items in the cart UI
}

document.getElementById('shopping-cart-button').addEventListener('click', showCart);

// 3) Show saved items (favorites)
function showFavorites() {
    const favoriteItems = getFavoriteItems(); // Assume this function fetches favorite items
    console.log('Favorite Items:', favoriteItems);
    // Display the items in the favorites UI
}

document.getElementById('favorites-button').addEventListener('click', showFavorites);

// 4) Send newsletter email to database
function submitNewsletter() {
    const email = document.getElementById('newsletter-email').value;
    fetch('/submit-email', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' }
    });
}

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    submitNewsletter();
});
