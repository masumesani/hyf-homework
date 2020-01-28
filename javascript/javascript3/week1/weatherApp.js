document.getElementById("btn-sub").addEventListener("click", showWeather);

function showWeather(){

    const cityName = document.getElementById("city-name").value;
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b6038f3c82d340d0e78b7ef52a56f8e5&units=metric`, requestOptions)
        .then(response => {
            if(response.status===200){
                return response.json()
            } else {
                return response.json().then(error=>{
                    throw error.message
                });
            }
        })
        .then(result => {
            document.getElementById("city").innerHTML=result.name;
            document.getElementById("temp").innerHTML=result.main.temp;
            document.getElementById("icon").src=`http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
            document.getElementById("wind-speed").innerHTML=result.wind.speed;
            document.getElementById("cloud").innerHTML=result.clouds.all;
            document.getElementById("sunrise").innerHTML=(new Date(result.sys.sunrise*1000)).toLocaleTimeString();
            document.getElementById("sunset").innerHTML=(new Date(result.sys.sunset*1000)).toLocaleTimeString();
        })
        .catch(error => {
            alert(error);
        });

}
