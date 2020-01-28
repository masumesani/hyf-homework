console.log('Script loaded');



const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

function getProducts(){
    return products;
}

function renderProducts(products) {
    productsUl.innerHTML = "";
    products.forEach(product => {
        const li = document.createElement('li');

        let shipsToHTML = '';
        product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);
    });
}

filterAndRender();

let searchwordDom = document.getElementById("search-box");
searchwordDom.addEventListener('input', filterAndRender);
let selectCounrtyDom = document.getElementById("selected-country");
selectCounrtyDom.addEventListener('input',filterAndRender);

////
function filterBySearchPhrase(list){
    //get filter string
    let searchwordDom = document.getElementById("search-box");
    let searchword = searchwordDom.value.toLowerCase() ;
    //filter products baseds onstring
    let filteredList = list.filter(filterByName)
    function filterByName(value){
        if(value.name.toLowerCase().includes(searchword)){
            return true
        }else{
            return false
        }
    }
    return filteredList;
}
////
function filterAndRender(){
    //get product list
    const products = getProducts();
    //filter
    // chain of responsibility
    let  filteredProducts = filterBySearchPhrase(products);
    filteredProducts = filterByCountry(filteredProducts);
    //render products
    renderProducts(filteredProducts);
}
///



function filterByCountry(list){
    const filteredCountryDom = document.getElementById("selected-country");
    let favCountry = filteredCountryDom.value;
    if(favCountry === ""){
        return list
    }
    //filter products baseds country
    let filteredList = list.filter(filterByCountryCallBack)
    function filterByCountryCallBack(value){
        if(value.shipsTo.map(value => value.toLowerCase()).includes(favCountry)){
            return true
        }else{
            return false
        }
    }
    return filteredList;
}
