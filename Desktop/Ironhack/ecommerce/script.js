//Dom manipulation


let items = [
    {
        salad: 'Cesar',
        price: 15,
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/675f76140379829.62497767a3651.png'
    },
    {
        salad: 'Stach Special',
        price: 15,
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/675f76140379829.62497767a3651.png'
    },
    {
        salad: 'Tuna Cheese',
        price: 15,
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/675f76140379829.62497767a3651.png'
    }, 
    {
        salad: 'Oriental Salad',
        price: 15,
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/675f76140379829.62497767a3651.png'
    }
];


let cart = [];


let list = document.querySelector('#items');


items.forEach((item,i) => {
    console.log(item.salad)
    list.innerHTML += `<li>
    <div>Salad:${item.salad}</div>
    <div>Price ${item.price}</div>
    <button>BUY SALAD</button>
    <input type="number" placeholder="quantity" onchange= 'inputChange("${i}", "${item.salad}", "${item.price}")'/>
    <img src="${item.image}"/>
    
    </li>`
    
});

function showCart(){

    let cartItems = document.querySelector('#cart');

    cart.forEach((item,i) => {
        console.log(item.salad)
        list.innerHTML += `<li>
        <div>Salad:${item.salad}</div>
        <div>Price ${item.quantity}</div>
        <img src="${item.image}"/>
        
        </li>`
        
    });
}




function inputChange(i, salad, price, image) {
    console.log('I want to but the salad number', i, salad, 'that cost $',price);
    let listitem = document.querySelectorAll('li')[i];
    let input = listitem.querySelector('input');
    let button = listitem.querySelector('button');

    button.onclick = function(){
        console.log('I click the button');
        cart.push({
        quantity: input.value,
         name: salad,
         price: price,
         image: image
        });
    }

    console.log(cart);
    showCart();
}

