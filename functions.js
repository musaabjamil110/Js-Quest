// Our next step is to configure the maps
function addTwoNumber(num1, num2){
    console.log(num1+num2);
}


function login(user){
    if(!user){
        console.log("please enter a username ");
        return
    }
    else{
        return ` ${user} just logged inn`
    }
    
}

function calculateCart(...num1){
    return num1;
}


const user = {
    username: "musaab",
    prices: 122
}

function handleobj(object1){
    console.log(`Username is ${object1.username} and price is ${object1.price}`);
}

handleobj({username: 'sam',
price: 233 })

const newarray = [122,133,144,155,166]

function returnsecondvalue(getArray){
    return getArray[1];
}

console.log(returnsecondvalue(newarray));