const cart = {};

const menuItems = [
    { name: "Burger", price: 8 },
    { name: "Pizza", price: 12 },
    { name: "Soft Drink", price: 3 },
    { name: "Chicken", price: 10 }
];

const buttons = document.querySelectorAll(".card button");

buttons.forEach((button, index) => {

    if(index < menuItems.length){

        button.addEventListener("click", () => {

            const item = menuItems[index];

            if(cart[item.name]){
                cart[item.name].quantity++;
            }else{
                cart[item.name]={
                    ...item,
                    quantity:1
                };
            }

            updateCart();

        });

    }

});

function updateCart(){

    let total=0;

    let count=0;

    const cartItems=document.getElementById("cart-items");

    cartItems.innerHTML="";

    for(let key in cart){

        const item=cart[key];

        total+=item.price*item.quantity;

        count+=item.quantity;

        cartItems.innerHTML+=`
        <p>
        ${item.name}
        × ${item.quantity}
        - $${(item.price*item.quantity).toFixed(2)}
        </p>
        `;
    }

    document.getElementById("cart-count").textContent=count;

    document.getElementById("cart-total").textContent="$"+total.toFixed(2);

}

document.getElementById("checkout-btn").addEventListener("click",()=>{

    alert("Order placed successfully!");

});
