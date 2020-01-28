//1
setTimeout( () =>{
    console.log("Called after 2.5 seconds")
}
, 2500);


//2
function myTimer(delay, stringToLog){
    setTimeout ( () =>{
        console.log(stringToLog)
    },delay)
}


//3
function btnCB(dom, ev){
myTimer(5000,"Called after 5 seconds");
}
document.getElementById("btn").addEventListener("click",btnCB );


//4
const earthLogger = () => {console.log("Earth")};
const saturnLogger = () => {console.log("Saturn")};
function  planetLogFunction (logFunc) {
    logFunc();
}
planetLogFunction(earthLogger);  
planetLogFunction(saturnLogger);


//5
function runAfterDelay(delay,callback){
    setTimeout(callback,delay*1000)
}

runAfterDelay(4,function(){
    console.log('should log after 4 seconds');
})
