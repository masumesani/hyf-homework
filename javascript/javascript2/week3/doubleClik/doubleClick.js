function logIfItIsDoubleClick(){
    document.getElementById("log").innerHTML = "double-click!!!"
}

function clearLog(){
    document.getElementById("log").innerHTML = ""
}

document.getElementById("page").addEventListener('click',callback)

let firstTime=0;
function callback(element,event){
    const time = (new Date()).getTime();
    if(time-firstTime<500){
        logIfItIsDoubleClick();
    }else{
        clearLog();
    }
    firstTime = time;
}
