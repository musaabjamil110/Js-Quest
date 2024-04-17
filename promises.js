const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve()
        console.log('Asynce taskkk is complete')
        
    },0)

})

promiseOne.then(function(){
    console.log("promise comsumed");   
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Asyncccc Task 2');
        resolve()
    },0)
}).then(function(){
    console.log('Asynccc task 2 completeeee');
})


const promisethree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({usesrname1: "chai" , email: "chai@example"})
        console.log('promise three');
                
    }, 0);
})

promisethree.then(function(user){
    console.log(user);
    
})

const promisefour= new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = false
        if(!error){
            resolve({username: "Musaab" , pasword: " 01232421"})
        }
        else {
            reject('Error occured')
        }
        
    }, 1000);
    
})

promisefour.then((user) => {
    console.log(user);
    return user.usesrname
}).then((username) =>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally( ()=>{
    console.log('Finallay either rejected or reolved' );
})



const promisefive= new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = true
        if(!error){
            resolve({username: "haji the great" , pasword: "hehehehe"})
        }
        else {
            reject('something in js went wrong')
        }
        
    }, 0);
    
})

async function consumepromisefive () {
    try {
        const response = await promisefive
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}

consumepromisefive()

async function getallusers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data =  await response.json()
        console.log(data);
        data.forEach(user => {
            console.log(`Address for ${user.name}:`, user.address);
        });

    } catch (error) {
        console.log("E: ", error);
    }

} 
getallusers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
}).then((data) =>{
    console.log(data)})
 .catch((error) => console.log(error))
