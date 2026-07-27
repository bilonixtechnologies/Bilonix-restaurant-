const cart = [];

const menuItems = [
    { name: "Burger", price: 8 },
    { name: "Pizza", price: 12 },
    { name: "Soft Drink", price: 3 },
    { name: "Chicken", price: 10 }
];

const buttons = document.querySelectorAll(".card button");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        cart.push(menuItems[index]);
        updateCart();
    });
});

function updateCart() {
    let total = 0;

    cart.forEach(item => {
        total += item.price;
    });

    document.getElementById("cart-count").textContent = cart.length;
    document.getElementById("cart-total").textContent = "$" + total.toFixed(2);
}
