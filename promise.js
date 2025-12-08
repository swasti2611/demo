//States
//pending
//fullfill(completed)-resolve 
//incomplted(failed)-reject

//...........................................................................................
//coment added fjnjkfnkgmkg.
//let promise=false
// let obj1=new Promise(function (resolve,reject){


//     if(promise== true){
//         resolve("yest promise complted")
//     }else{
//         reject("failed promise,i didnt bought the cloths")
       
//     }

// })

// obj1.then((res)=>{
// console.log("response from resolve",res);
 
// }).catch((res)=>{
// console.log("promise rejected (failed)",res);

// })

//...................................... promise chnaining............................................................
// Asynchronouns 
//settimeout
//setinterval
// Imagine you’re ordering a pizza:
// First: place order
// Then: pizza is being cooked
// Then: pizza is delivered
// Then: you eat it 😋


function Step1(){
return new Promise((resolve,reject)=>{
setTimeout(()=>{

resolve("Pizzz ordered")

},1000)
})



}



Step1().then((data)=>{
console.log("first step ",data)

//2nd promise start
 return new Promise((res,rej)=>{
   setTimeout(() => {
     if(data){
         res("pizza is being cooked")
    }else{
rej("order cancel")
    }
   }, 3000);
 })

}).then((data)=>{
    console.log("second step ",data);
    return new Promise((res,rej)=>{
        setTimeout(() => {
            if(data){
                res("pizza is delivered")
            }else{
                rej("pizza is not delivered")
            }
        }, 3000);
    })
}).then((data)=>{
    console.log("third step ",data);
}).catch((err)=>{
    console.log("error",err);
})

