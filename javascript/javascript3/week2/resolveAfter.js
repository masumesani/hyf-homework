function resolvedAfterFun(resolveAfter) {
    return new Promise (resolve=>{
        setTimeout(() => {
            resolve();
        }, resolveAfter*1000);
    })
}    
const cBFunc = ()=> console.log("I am called asynchronously");

resolvedAfterFun(6).then(cBFunc);