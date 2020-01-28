// new Promise((resolve,reject)=>{
//     //if good
//     resolve();
//     //if bad
//     reject();
// })

// let promise = sum(3,5)

// let resolveFunc = r => console.log("done=>"+r);
// let rejectFunc = e => console.log("error=>"+e)

// promise.then(resolveFunc).catch(rejectFunc)

function sum2(a,b){
    return new Promise((resolve,reject)=>{
        if(a+b%2===0){
            resolve(a+b)
        } else{
            reject(-1)
        }
    })
}

// sum2(3,4).then(r=>console.log(r)).catch(e=>console.log("e=>"+e))
// sum(3,5).then(r=>console.log(r)).catch(e=>console.log("e=>"+e))

sum(3,4).then(result=>{
    if(result>4){
        sum(3,6).then(res2=>{
            let l = res2
        }).catch(e=>{
            let error= e
        })
    } else{
        sum(3,7).then(res3=>{}).catch(e=>{
            let error=e;
        })
    }
}).catch(e=>{
    let error =e
})

let func = async ()=>{
    try{
        let result = await sum(3,4);
        if(result>4){
            let res2 = await sum(3,6);
            let l = res2
        } else{
            let res3 = await sum(3,7);
        }
    } catch(e){
        let error = e;
    }
}

func();

function sum(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{    
            if((a+b)%2===0){
                    resolve(a+b)
                } else{
                    reject(-1)
                }
            },10000)
    })
}