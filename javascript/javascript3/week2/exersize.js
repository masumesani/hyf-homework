//1

// let requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
// fetch("https://yesno.wtf/api", requestOptions)
//     .then(response => response.json())
//     .then(result => 
//         document.getElementById('answer').innerHTML = `Your answer is ${result.answer}`)
//         //console.log('yes',result))
//     .catch(error => console.log('error', error));
   
//2.1

// const promiseAfter4Second = new Promise(function (resolve, reject){
//     setTimeout(function(){
// resolve()
//     },4000)
// });

// promiseAfter4Second.then(() => console.log("hello"))


//2.2
// const promiseAfter2SecondFunc = (msg) => new Promise(function(resolve, reject){
// setTimeout(function(){
//     resolve(msg)//cbFunc("hey there")
// }, 2000);
// });

// promiseAfter2SecondFunc("hey there").then(cbFunc)

// function cbFunc(msg){
//     console.log(msg)
// }

//2.3.1 & 2.4
// const promiseAfter2SecondFunc = (msg) => new Promise(function(resolve, reject){
//     setTimeout(function(){
//         if (Math.random() > 0.5){
//         resolve(msg)//cbFunc("hey there")
//         }else{
//         reject("next time")
//         }
       
//     }, 2000);
//     });
    
//     promiseAfter2SecondFunc("hey there").then(cbFunc).catch(cbFuncRej)
    
//     function cbFunc(msg){
//         console.log(msg)
//     }
//     function cbFuncRej(msg){
//         console.log(msg)
//     }
    

//3


const returnPromise = (successMessage) => new Promise(function (resolve){
        setTimeout(function(){
    resolve(successMessage)
        },1000)
    });

returnPromise("this is success message").then(anotherCB);

function anotherCB(successMessage) {
   console.log(successMessage) 
}


