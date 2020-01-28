console.log('Script loaded');

 //const testProductNames = ['Flat screen', 'Mobile phone', 'Wallet'];
 //renderProducts(testProductNames);


function renderProducts(arr){
    let productUlDom = document.querySelector("section.products ul");
    arr.forEach((element)=>{
        let lidom = document.createElement('li');
        lidom.innerHTML = element.name;
        productUlDom.appendChild(lidom);
    });


}


let availableProdoct = getAvailableProducts();
renderProducts(availableProdoct);
console.log(getAvailableProducts());

