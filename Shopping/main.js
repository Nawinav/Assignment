
const showMenu=(toggleId,navId)=>{
    const toggle=document.getElementById(toggleId),
            nav=document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')


const navLink=document.querySelectorAll('.nav__link')

function linkAction(){
    navLink.forEach(n=>n.classList.remove('active'))
    this.classList.add('active')

    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n=>n.addEventListener('click',linkAction))


// cart js

// ***************************************************
// Shopping Cart functions
var dis=document.getElementById("mydisplay");

var shoppingCart = (function () {
    // Private methods and properties
    var cart = [];

    function Item(name, price, count,img) {
        this.name = name
        this.price = price
        this.count = count
        this.img=img
    }

    function saveCart() {
        localStorage.setItem("shoppingCart", JSON.stringify(cart));
    }

    function loadCart() {
        cart = JSON.parse(localStorage.getItem("shoppingCart"));
        if (cart === null) {
            cart = []
        }
    }

    loadCart();



    // Public methods and properties
    var obj = {};

    obj.addItemToCart = function (name, price, count,img) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count += count;
                saveCart();
                return;
            }
        }

        console.log("addItemToCart:", name, price, count,img);

        var item = new Item(name, price, count,img);
        cart.push(item);
        saveCart();
    };

    obj.setCountForItem = function (name, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
        saveCart();
    };


    obj.removeItemFromCart = function (name) { // Removes one item
        for (var i in cart) {
            if (cart[i].name === name) { // "3" === 3 false
                cart[i].count--; // cart[i].count --
                if (cart[i].count === 0) {
                    cart.splice(i, 1);
                   
                }
                break;
            }
        }
        saveCart();
    };


    obj.removeItemFromCartAll = function (name) { // removes all item name
        for (var i in cart) {
            if (cart[i].name === name) {
                cart.splice(i, 1);
                break;
            }
        }
        saveCart();
    };


    obj.clearCart = function () {
        cart = [];
        saveCart();
    }


    obj.countCart = function () { // -> return total count
        var totalCount = 0;
        for (var i in cart) {
            totalCount += cart[i].count;
        }

        return totalCount;
    };

    obj.totalCart = function () { // -> return total cost
        var totalCost = 0;
        for (var i in cart) {
            totalCost += cart[i].price * cart[i].count;
        }
        return totalCost.toFixed(2);
    };

    obj.listCart = function () { // -> array of Items
        var cartCopy = [];
        console.log("Listing cart");
        console.log(cart);
        for (var i in cart) {
            console.log(i);
            var item = cart[i];
            var itemCopy = {};
            for (var p in item) {
                itemCopy[p] = item[p];
            }
            itemCopy.total = (item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy);
        }
        return cartCopy;
    };

    // ----------------------------
    return obj;
})();

var noti=document.querySelector('.coun');

var button=document.querySelectorAll('.btncount');

for(but of button){
    but.addEventListener('click',(e)=>{
        var add=Number(noti.getAttribute('data-count')|| 0);
        noti.setAttribute('data-count',add+1);
        noti.classList.add('zero');    
    })
}

const time=document.querySelector('.clock');

const tick=()=>{
    const now=new Date();

    
    const h=now.getHours();

    const m=now.getMinutes();

    const s=now.getSeconds();

    const y=now.getUTCDate();
    
    const z=now.getUTCFullYear();

    var weekdays = new Array(7);
    weekdays[0] = "Sun";
    weekdays[1] = "Mon";
    weekdays[2] = "Tues";
    weekdays[3] = "Wed";
    weekdays[4] = "Thur";
    weekdays[5] = "Fri";
    weekdays[6] = "Sat";
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "Dec"
];
    var r = weekdays[now.getDay()];
    var d = monthNames[now.getUTCMonth()];

    const html=`
    <span>${z}</span>
    <span>${d}</span>
    <span>${y}</span>
    <span>${r}</span>
    <span>${h}</span>
    <span>${m}</span>
    <span>${s}</span>
    `;
    time.innerHTML=html;
};

setInterval(tick,1000);