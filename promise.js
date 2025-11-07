//promise
//synchronous and asynchronous

function A(){

    setTimeout(()=>{
for(let i=0;i<=30;i++){
    console.log("hello from ",i);
    
}

    },10000)
}


function B(){
    console.log("helloB")
}

A()
B()


//Asynchrounous -callback promises async await ,setTimeout setInterval

