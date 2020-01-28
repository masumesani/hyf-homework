let peterWide = 8;
let peterDeep = 10;
let peterHigh = 10;
let peterHouseSizeInM3 = (peterWide * peterDeep * peterHigh);
let peterGardenSizeInM2 = 100;
let peterHouseOffer = 500000;

let peterHousePrice = (peterHouseSizeInM3 * 2.5 * 1000 + peterGardenSizeInM2 * 300);
console.log(`Peter should pay ${peterHousePrice}`);

if(peterHouseOffer<peterHousePrice){
    console.log("Congrats Peter! It is a good deal!");
} else {
    console.log("Peter think twice, you're paying too much");
}


let juliaWide = 5;
let juliaDeep = 11;
let juliaHigh = 8;
let juliaHouseSizeInM3 = (juliaWide * juliaDeep * juliaHigh);
let juliaGardenSizeInM2 = 70;
let juliaHouseOffer =  2000000;

let juliaHousePrice = (juliaHouseSizeInM3 * 2.5 * 1000 + juliaGardenSizeInM2 * 300);
console.log(`Julia should pay ${juliaHousePrice}`);   

if(juliaHouseOffer<juliaHousePrice){
    console.log("Congrats Julia! It is a good deal!");
} else {
    console.log("Julia think twice, you're paying too much");
}