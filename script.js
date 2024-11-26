let list = document.getElementById('list')
fetch('http://localhost:5000/goods')
.then((res) => res.json())
.then((data) => ShowArray(data))

function ShowArray(arr = []) {
    arr.forEach(element => {
        let li = document.createElement('li')
        li.innerHTML = `
            <p>${element.product_name}</p>
            <p>${element.product_description}</p>
            <p>${element.product_price}</p>
            <p>${element.store_name}</p>
            <p>${element.store_address}</p>
            <button id ="btn">ADD</button>
            `
        li.querySelector('#btn').addEventListener('click', () => {
            let ls = JSON.parse(localStorage.getItem('cart')) || []
            if (!ls.some(item => item.product_name === element.product_name)) { //1 elemeti 1 defe elave etmek ucun
                ls.push(element)
                localStorage.setItem('cart', JSON.stringify(ls))
                console.log('Product added to cart:', element.product_name);
            }
            else {
                console.log(`${element.product_name} Already in the Cart!\nYou Can Only Add The Same Product Once.`);
            }
        })
        list.appendChild(li)
    });
}