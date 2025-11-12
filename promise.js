//States
//pending
//fullfill(completed)-resolve 
//incomplted(failed)-reject


//coment added fjnjkfnkgmkg.
let promise=false
let obj1=new Promise(function (resolve,reject){


    if(promise== true){
        resolve("yest promise complted")
    }else{
        reject("failed promise,i didnt bought the cloths")
       
    }

})

obj1.then((res)=>{
console.log("response from resolve",res);

}).catch((res)=>{
console.log("promise rejected (failed)",res);

})




 