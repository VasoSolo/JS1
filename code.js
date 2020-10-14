var cart = [];

function product(name, price) {
    this.name = name;
    this.price = price;

    this.AddCart = function () {
        cart.push(this);
    }
}
var cart_btn = document.querySelector(".cart");
function add_aircraft() {
    var name = document.querySelector(".card_aircraft_h2");
    var price = document.querySelector(".card_aircraft_p");
    var newProduct = new product(name.innerHTML, price.innerHTML);
    newProduct.AddCart();
    reDrawcart();
}
var btn_aircraft = document.getElementById("btnAddCart_aircraft");
btn_aircraft.addEventListener("click", add_aircraft);

function add_elephant() {
    var name = document.querySelector(".card_elephant_h2");
    var price = document.querySelector(".card_elephant_p");
    var newProduct = new product(name.innerHTML, price.innerHTML);
    newProduct.AddCart();
    reDrawcart();
}
var btn_elephant = document.getElementById("btnAddCart_elephant");
btn_elephant.addEventListener("click", add_elephant);

function add_messi() {
    var name = document.querySelector(".card_messi_h2");
    var price = document.querySelector(".card_messi_p");
    var newProduct = new product(name.innerHTML, price.innerHTML);
    newProduct.AddCart();
    reDrawcart();
}
var btn_messi = document.getElementById("btnAddCart_messi");
btn_messi.addEventListener("click", add_messi);

function reDrawcart() {
    cart_btn.innerHTML = "корзина (" + cart.length + ") " + sum()
}
function sum() {
    var sum = 0;
    cart.forEach(element => {
        sum = Number(sum) + Number(element.price);
    });
    return sum;
}