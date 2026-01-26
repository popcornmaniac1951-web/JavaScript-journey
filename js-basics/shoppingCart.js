let cart = [];

function addItem(name,price,qty){
    cart.push({
        name: name,
        price: price,
        qty: qty
    });
}

addItem("iphone,",299,2);
addItem("nokia",255,9);
addItem("samsung",999,6);


function calculateTotal(){
    let total = 0;
    for(let i = 0;i<cart.length;i++){
        total += cart[i].price * cart[i].qty;
    }
    return total;
}

function applyDiscount(total){
    if(total>= 2000){
        return total * 0.9;
    }
    return total;
}

let total = calculateTotal();
let finalAmouunt = applyDiscount(total);

console.log("cart",cart);
console.log("total",total);
console.log("final amount",finalAmouunt);