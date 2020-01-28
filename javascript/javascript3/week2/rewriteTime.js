function setTimeoutPromise(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, time);
    })
}

setTimeoutPromise(3000)
    .then(() => {
        console.log('Called after 3 seconds');
    });
//
function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject('Geolocation is not supported by your browser');
        } else {
            navigator.geolocation.getCurrentPosition(position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                resolve({latitude,longitude})
            }, () => {
                reject('Unable to retrieve your location')
            });
        }
    })
}

getCurrentLocation()
    .then((position) => {
        // called when the users position is found
        console.log(position);
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.log(error);
    });


let promise1 = setTimeoutPromise(40);
let promise2 = setTimeoutPromise(60);
let promise3 = setTimeoutPromise(10);
let promise4 = setTimeoutPromise(2000);

Promise.all([promise1,promise2,promise3,promise4]).then(()=>console.log('all finished'))
Promise.race([promise4,promise1]).then(()=>console.log())
Promise.reject().catch()
Promise.resolve().then()