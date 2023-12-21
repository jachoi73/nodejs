import * as cartLocalService from './cartLocalService.js';
const itemCart = document.querySelectorAll('.cart-item');
let subtotal = 0;
let total = 0;
const totalCart = document.getElementById('total-cart');
const totalItemsCart = document.getElementById('cant-items-cart');
const subtotalItems = document.getElementById('subtotal');
const cartBody = document.querySelector('body');
const user = cartBody.dataset.userId;
itemCart.forEach(item => {
    const btnAdd = item.querySelector('#add');
    const btnSub = item.querySelector('#substract');
    const quantity = item.querySelector('#quantity');
    const itemPrice = item.querySelector('#item-price');
    const btnDelete = item.querySelector('.cart-item-delete');
    btnAdd.addEventListener('click', (e) => {
        quantity.value++;
        total++;
        subtotal += parseFloat(itemPrice.innerHTML);
        totalCart.innerHTML ='$' + subtotal.toFixed(2);
        updateCart();
        const id = e.target.dataset.itemId;
        const userId = e.target.dataset.userId;
        if (user) {
            const url = `/shop/add?idUser=${userId}&id=${id}&quantity=${quantity.value}`;
            window.location.href = url;
        }else{
            cartLocalService.updateCart(id, quantity.value);
        }
    });

    btnSub.addEventListener('click', (e) => {
        if (quantity.value > 1) {
            quantity.value--;
            total--;
            subtotal -= parseFloat(itemPrice.innerHTML);
            totalCart.innerHTML = '$' +  subtotal.toFixed(2);
            updateCart();
            const id = e.target.dataset.itemId;
            const userId = e.target.dataset.userId;
            if (user) {
                const url = `/shop/add?idUser=${userId}&id=${id}&quantity=${quantity.value}`;
                window.location.href = url;
            }else{
                cartLocalService.updateCart(id, quantity.value);
            }
        }
    });

    btnDelete.addEventListener('click', (e) => {
        const user = cartBody.dataset.userId;
        if (user === '' || user === undefined) {
            const id = e.target.dataset.itemId;
            const quantity = e.target.dataset.itemQuantity;
            cartLocalService.deleteItemCart(id);
            const url = window.location.href;
            const urlArray = url.split('?');
            const urlArray2 = urlArray[1].split('&');
            const filteredArray = [];
            for (let i = 0; i < urlArray2.length; i++) {
                const currentItem = urlArray2[i];
                const [key, value] = currentItem.split('=');
                if (key === 'id' && value === id) {
                    i++;
                } else {
                    filteredArray.push(currentItem);
                }
            }
            const urlFinalString = urlArray[0] + '?' + filteredArray.join('&');
            window.location.href = urlFinalString;
        } else {
            const id = e.target.dataset.itemId;
            const userId = e.target.dataset.userId;
            const url = `/shop/add?idUser=${userId}&id=${id}&quantity=0`;
            window.location.href = url;
        }
    });

    const subtotalItem = parseInt(quantity.value) * parseFloat(itemPrice.innerHTML);
    subtotal += subtotalItem;
    total += parseInt(quantity.value);
    totalCart.innerHTML = '$' + subtotal.toFixed(2);
});

function updateCart() {
    totalItemsCart.innerHTML = total;
    subtotalItems.innerHTML ='$' + subtotal.toFixed(2);
}

updateCart();
if (itemCart.length === 0) {
    if (user === '' || user === undefined) {
        let url = `/shop/local?`;
        try {
            const res = await cartLocalService.getCartAll();
            res.forEach(item => {
                const id = item.itemId;
                const quantity = item.quantity;
                url += `id=${id}&quantity=${quantity}`;
                if (res.indexOf(item) < res.length - 1) {
                    url += '&';
                }
            });
            window.location.href = url;
        } catch (error) {
            console.log(error);
        }
    }
}
