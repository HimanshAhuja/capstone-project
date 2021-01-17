var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");
var oatsAdd = document.getElementById("oats");
var spinachAdd = document.getElementById("spinach");
var dalAdd = document.getElementById("dal");
var almondsAdd = document.getElementById("almonds");
var cheeseAdd = document.getElementById("cheese");


console.log(oatsAdd);

var oats={
    name:"Oats",
    quantity:0,
    dollars:1,
    cents:99,
}

var spinach={
    name:"Spinach",
    quantity:0,
    dollars:1,
    cents:15,
}

var dal={
    name:"Dal",
    quantity:0,
    dollars:1,
    cents:59,
}

var almonds={
    name:"Almonds",
    quantity:0,
    dollars:3,
    cents:59,
}

var cheese={
    name:"Cheese",
    quantity:0,
    dollars:3,
    cents:99,
}

function updateCart(){
    cart = oats.quantity+
    spinach.quantity+
    dal.quantity+
    almonds.quantity+
    cheese.quantity;
    cartValue.innerHTML = cart;
}

oatsAdd.onclick=(e)=>{
    oats.quantity++;
    updateCart();
    console.log("oats");
}

spinachAdd.onclick = (e) =>{
    spinach.quantity++;
    updateCart();
    console.log("spinach");
}

dalAdd.onclick = (e) =>{
    dal.quantity++;
    updateCart();
    console.log("spinach");
}

almondsAdd.onclick = (e) =>{
    almonds.quantity++;
    updateCart();
    console.log("spinach");
}

cheeseAdd.onclick = (e) =>{
    cheese.quantity++;
    updateCart();
    console.log("spinach");
}

var finalDollars = 0;
var finalCents = 0;

function updatePrice(){
    var oatsCostInCents = oats.quantity*oats.dollars*100+oats.quantity*oats.cents;
    var spinachCostInCents = spinach.quantity*spinach.dollars*100+spinach.quantity*spinach.cents;
    var dalCostInCents = dal.quantity*dal.dollars*100+dal.quantity*dal.cents;
    var almondsCostInCents = almonds.quantity*almonds.dollars*100+almonds.quantity*almonds.cents;
    var cheeseCostInCents = cheese.quantity*cheese.dollars*100+cheese.quantity*cheese.cents;
    totalPriceInCents = 
    oatsCostInCents+
    spinachCostInCents+
    dalCostInCents+
    almondsCostInCents+
    cheeseCostInCents;
    finalDollars=Math.floor(totalPriceInCents/100);
    finalCents=totalPriceInCents%100;
    console.log(totalPriceInCents)
}

var whatsappLink = "https://api.whatsapp.com/send?phone=9413335901&text=Order%20details";

function updatewhatsappLink(){
    if(oats.quantity!=0){
        whatsappLink+="%0A"+oats.name+"%20"+oats.quantity
    }
    if(spinach.quantity!=0){
        whatsappLink+="%0A"+spinach.name+"%20"+spinach.quantity
    }
    if(dal.quantity!=0){
        whatsappLink+="%0A"+dal.name+"%20"+dal.quantity
    }
    if(almonds.quantity!=0){
        whatsappLink+="%0A"+almonds.name+"%20"+almonds.quantity
    }
    if(cheese.quantity!=0){
        whatsappLink+="%0A"+cheese.name+"%20"+cheese.quantity
    }
    whatsappLink +=
    "%0A" + "Total%20Price:%20$" + finalDollars + "%20" + finalCents + "c";
}

cartButton.onclick = () => {
    updateCart();
    
    updatePrice();
    updatewhatsappLink();
    window.open(whatsappLink,"_blank");
}