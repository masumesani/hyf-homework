class Product {
    constructor(name, price, currency) {
        this.name = name;
        this.price = price;
        this.currency = currency || 'dkk';
    }

    convertToCurrency(cur){
        return new Promise((resolve,reject)=>{
            fetch(`https://free.currconv.com/api/v7/convert?q=${this.currency}_${cur}&compact=ultra&apiKey=b03722646520a3281f3e`)
            .then(res=>res.json())
            .then(pres=>resolve((Object.values(pres)[0]*this.price).toFixed(2)))
            .catch(reject)
        })
    }
}

class ShoppingCart {
    constructor(products) {
        this.products = products;
        let self=this;
        document.getElementById('currencies').addEventListener('change',()=>{
            self.renderProducts();
        });
    }
    
    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(product) {
        this.products = this.products.filter(item => item.name !== product.name);
    }

    searchProduct(productName) {
        return this.products.filter(f=>f.name === productName);
    }

    getTotal() {
        return this.products.reduce((p,c)=>p+c,0)
    }

    renderProducts() {
        let user = document.getElementById("user");
        let userEmail = document.getElementById('email');
        this.getUser().then(res=>{
            user.innerHTML=res.name;
        userEmail.innerHTML = res.email;
        });

        let currency = document.getElementById('currencies').value;
        let productsDom = document.getElementById("ptable");

        productsDom.innerHTML="";
        let trh = document.createElement('tr');
        Object.keys(new Product()).forEach(k=>{
            let th = document.createElement('th');
            th.innerHTML = k;
            trh.appendChild(th);
        })
        productsDom.appendChild(trh);

        let convertedProductsPromises = this.products.map(p=>{
            return new Promise((resolve,reject)=>{
                if(p.currency === currency){
                    resolve(p);
                }
                p.convertToCurrency(currency).then((newPrice)=>{
                    resolve(new Product(p.name,newPrice,currency))
                }).catch(reject);
            })
        })

        Promise.all(convertedProductsPromises).then(convertedProducts=>{
            convertedProducts.forEach(p=>{
                let tr = document.createElement('tr');
                Object.keys(p).forEach(k=>{
                    let td = document.createElement('td');
                    td.innerHTML = p[k];
                    tr.appendChild(td)
                })
                productsDom.appendChild(tr);
            })
        })
    }

    getUser() {
        return fetch('https://jsonplaceholder.typicode.com/users/1').then(r=>r.json());
    }
}

const flatscreen = new Product('flat-screen', 5000);
const shoppingCart = new ShoppingCart([flatscreen]);



const rice = new Product('rice', 50);
shoppingCart.addProduct(rice);

shoppingCart.addProduct(new Product('ObamaCarePlan', 500, 'USD'));

shoppingCart.renderProducts();

rice.convertToCurrency('USD').then(price=>console.log(price))