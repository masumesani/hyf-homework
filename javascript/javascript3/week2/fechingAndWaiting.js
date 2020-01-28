let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
fetch("https://yesno.wtf/api", requestOptions)
    .then(response => response.json())
    .then(result => 
        document.getElementById('answer').innerHTML = `Your answer is ${result.answer}`)
        //console.log('yes',result))
    .catch(error => console.log('error', error));

    const promiseAfter3Second = new Promise(function (resolve, reject){
    setTimeout(function(){
resolve()
    },3000)
});

promiseAfter3Second.then(() => console.log(result))//??