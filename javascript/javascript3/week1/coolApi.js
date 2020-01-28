// //

const button = document.getElementById("btn");
button.addEventListener('click',fetchDataFun);

function fetchDataFun() {
    const qoutReader = document.getElementById('read-qout');
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://quote-garden.herokuapp.com/quotes/random", requestOptions)
        .then(response => response.text())// shouldn't it be .json?
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    
}


  

// https://quote-garden.herokuapp.com/quotes/random


// // this is a json format that i will recieve

// {
//     "_id": "5d91b45d9980192a317c8cfb",
//     "quoteText": "The person who lives life fully, glowing with life's energy, is the person who lives a successful life.",
//     "quoteAuthor": "Daisaku Ikeda"
// }
// // it is an object
// //it contains objects arrays
