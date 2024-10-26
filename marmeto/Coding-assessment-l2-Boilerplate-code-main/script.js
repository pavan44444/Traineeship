fetch("https://cdn.shopify.com/s/files/1/0883/2188/4479/files/apiCartData.json?v=1728384889")
.then((res)=>{
    return res.json();
}).then((data)=>{
    data.items.forEach(item => {

    document.getElementById("quantity").innerHTML = item.quantity;
    document.getElementById("price").innerHTML = item.price/10;
    document.getElementById("subtotal").innerHTML = item.price/10 * item.quantity;
    document.getElementById("subt").innerHTML = item.price/10;
    document.getElementById("total").innerHTML = item.price/10 * item.quantity; 



      

    });
})