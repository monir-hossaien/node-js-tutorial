

function greet (name){
    console.log(`Hello, ${name}`)
}

function higherOrderFunction(callback){
    const name = 'Monir'
    callback(name)
}

higherOrderFunction(greet);