const listings = [
    {
      "type": "Shed",
      "facilities": [
        "Parkering"
      ],
      "price": 1311,
      "hasGarden": true,
      "size": 383
    },
    {
      "type": "House",
      "facilities": [
        "Elevator",
        "Parkering"
      ],
      "price": 752,
      "hasGarden": true,
      "size": 627
    },
    {
      "type": "Shed",
      "facilities": [
        "Have"
      ],
      "price": 2564,
      "hasGarden": false,
      "size": 349
    },
    {
      "type": "Shed",
      "facilities": [
        "Parkering",
        "Altan"
      ],
      "price": 2309,
      "hasGarden": true,
      "size": 687
    },
    {
      "type": "Shed",
      "facilities": [
        "Have"
      ],
      "price": 1269,
      "hasGarden": false,
      "size": 76
    },
    {
      "type": "Apartment",
      "facilities": [
        "Elevator",
        "Have"
      ],
      "price": 9032,
      "hasGarden": true,
      "size": 25
    },
    {
      "type": "Farm",
      "facilities": [
        "Altan",
        "Parkering"
      ],
      "price": 8266,
      "hasGarden": true,
      "size": 697
    },
    {
      "type": "House",
      "facilities": [
        "Husdyr",
        "Elevator"
      ],
      "price": 8601,
      "hasGarden": true,
      "size": 573
    },
    {
      "type": "House",
      "facilities": [
        "Husdyr"
      ],
      "price": 3041,
      "hasGarden": true,
      "size": 872
    },
    {
      "type": "House",
      "facilities": [
        "Parkering"
      ],
      "price": 8233,
      "hasGarden": true,
      "size": 781
    },
    {
      "type": "Shed",
      "facilities": [
        "Altan",
        "Husdyr"
      ],
      "price": 9842,
      "hasGarden": false,
      "size": 280
    },
    {
      "type": "House",
      "facilities": [
        "Have",
        "Altan"
      ],
      "price": 5387,
      "hasGarden": false,
      "size": 338
    },
    {
      "type": "Apartment",
      "facilities": [
        "Have",
        "Husdyr"
      ],
      "price": 4233,
      "hasGarden": false,
      "size": 252
    },
    {
      "type": "Farm",
      "facilities": [
        "Altan",
        "Have",
        "Parkering"
      ],
      "price": 8477,
      "hasGarden": true,
      "size": 917
    },
    {
      "type": "Farm",
      "facilities": [
        "Have",
        "Altan",
        "Husdyr",
        "Elevator"
      ],
      "price": 6904,
      "hasGarden": true,
      "size": 339
    },
    {
      "type": "Farm",
      "facilities": [
        "Husdyr",
        "Have"
      ],
      "price": 5601,
      "hasGarden": true,
      "size": 474
    },
    {
      "type": "Apartment",
      "facilities": [
        "Altan",
        "Husdyr"
      ],
      "price": 790,
      "hasGarden": true,
      "size": 896
    },
    {
      "type": "Farm",
      "facilities": [
        "Husdyr",
        "Altan"
      ],
      "price": 543,
      "hasGarden": false,
      "size": 984
    },
    {
      "type": "Dorm",
      "facilities": [
        "Husdyr",
        "Elevator"
      ],
      "price": 7382,
      "hasGarden": false,
      "size": 95
    },
    {
      "type": "Farm",
      "facilities": [
        "Elevator",
        "Altan",
        "Husdyr"
      ],
      "price": 9280,
      "hasGarden": false,
      "size": 597
    }
  ]
listings.forEach(element => {
    let sizeItem = element.size
    console.log(sizeItem);
    
}); 
listings.forEach(element =>{
  let elementItem = element.type
}

);

const listPrice = listings.map(listings => listings.price);
console.log(listPrice);

const listfacility= listings.map(listings =>listings.facilities);
console.log(listfacility);



//  function renderProducts(arr){
//   let productUlDom = document.querySelector("section.products ul");
//   arr.forEach((element)=>{
//       let lidom = document.createElement('li');
//       lidom.innerHTML = element.name;
//       productUlDom.appendChild(lidom);
//   });
// }

function renderListing(arr){
  let listItemUlDom = document.getElementById("list-item");
  arr.forEach((object)=>{
  let lidom = document.createElement("li");
  lidom.innerHTML = object.type;
  listItemUlDom.appendChild(lidom);
});
};
let updatedList = renderListing(listings);
console.log(updatedList);