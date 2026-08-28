let cart = [];


// Add product to cart

function addToCart(name, price) {

    const existingProduct = cart.find(
        product => product.name === name
    );

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    updateCart();
}


// Display cart

function updateCart() {

    const cartItems =
        document.getElementById("cart-items");

    const cartCount =
        document.getElementById("cart-count");

    const cartTotal =
        document.getElementById("cart-total");


    cartItems.innerHTML = "";

    let total = 0;
    let itemCount = 0;


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

    }


    cart.forEach((product, index) => {

        const subtotal =
            product.price * product.quantity;

        total += subtotal;

        itemCount += product.quantity;


        const item = document.createElement("div");

        item.className = "cart-item";

        item.innerHTML = `
            <div>
                <strong>${product.name}</strong>
                <p>
                    ₦${product.price.toLocaleString()}
                    × ${product.quantity}
                </p>
            </div>

            <div>
                <strong>
                    ₦${subtotal.toLocaleString()}
                </strong>

                <button
                    class="remove-btn"
                    onclick="removeFromCart(${index})">
                    Remove
                </button>
            </div>
        `;


        cartItems.appendChild(item);

    });


    cartCount.textContent = itemCount;

    cartTotal.textContent =
        total.toLocaleString();

}


// Remove product

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


// Checkout

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }


    let order = "Your Order:\n\n";

    let total = 0;


    cart.forEach(product => {

        const subtotal =
            product.price * product.quantity;

        total += subtotal;

        order +=
            `${product.name} × ${product.quantity} = ₦${subtotal.toLocaleString()}\n`;

    });


    order +=
        `\nTotal: ₦${total.toLocaleString()}`;


    alert(order);

    alert(
        "Thank you! Your order has been received."
    );

}