document.getElementById("btn-sub").addEventListener("click", displayGif);

function displayGif(){

    const gifDescription = document.getElementById("search-bar").value;
    const gifLimit = document.getElementById("gif-number").value;
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`http://api.giphy.com/v1/gifs/search?api_key=OxbjziLzKjGyxN4Cbnhn2F88geWGQBF6&q=${gifDescription}&limit=${gifLimit}`, requestOptions)
        .then(response => 
            response.json())
        .then(result => {
            //let url= result.data[0].images.downsized_large.url;
            let gifs = document.getElementById('gifs');
            result.data.forEach(value =>{

             let url = value.images.downsized_large.url
            let img = document.createElement('img'); 
            img.src =  url;
            gifs.appendChild(img);
            })
            
                       

//display url
        })
        .catch(error => console.log('error', error));
};
