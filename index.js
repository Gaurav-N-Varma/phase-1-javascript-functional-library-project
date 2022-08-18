// functional programming

function myEach(collection, callback){
    // must declare outside of if statement, or else is out of scope
    let newCollection = []

    // if the collection is an object, creates an array w/ values
    if(!Array.isArray(collection)){
        newCollection = Object.values(collection)
    } else {newCollection = collection}

    // iterates over the array, passes each element in turn to callback function
    newCollection.forEach(element => callback(element))
    
    // returns the original collection
    return collection
}

function myMap(collection, callback){
    // must declare outside of if statement, or else is out of scope
    let newCollection = []
    let returnCollection = []

    // if the collection is an object, creates an array w/ values
    if(!Array.isArray(collection)){
        newCollection = Object.values(collection)
    } else {newCollection = collection}

    newCollection.forEach(element => {
        returnCollection.push(callback(element))
    })

    // returns the modified collection
    return returnCollection
}

function myReduce(collection, callback, acc){
    // declaring array which holds either passed in array or 
    let newCollection = []
    let newAcc = 0

    // if the collection is an object, creates an array w/ values
    if(!Array.isArray(collection)){
        newCollection = Object.values(collection)
    } else {newCollection = collection}

    // if acc is passed in, works with that - otherwise works with 0
    if(acc){
        newAcc = acc
    } else {
        newAcc = newCollection[0]
        newCollection = newCollection.slice(1)
    }

    newCollection.forEach(value => newAcc = callback(newAcc, value, newCollection))

    return newAcc
}


function myFind(collection, predicate){
    let newCollection = []
    let returnElement

    // if the collection is an object, creates an array w/ values and assigns to newCollection
    if(!Array.isArray(collection)){
        newCollection = Object.values(collection)
    // otherwise, assigns the array to newCollection
    } else {newCollection = collection}

    for (let element of newCollection){
        // if the element satisfies predicate
        if(predicate(element)){
            returnElement = element
            break
        // if the element is the last element in the array (and ...
        // ... after not having satisfied predicate)
        } else if(newCollection.indexOf(element) === newCollection.length - 1){
            returnElement = undefined
        }
    }
    return returnElement
}


function myFilter(collection, predicate){
    let newCollection = []
    let returnArray = []

    // if the collection is an object, creates value array
    if(!Array.isArray(collection)){
        newCollection = Object.values(collection)
    } else {newCollection = collection}

    newCollection.forEach(element => {
        if(predicate(element)){
            returnArray.push(element)
        }
    })

    return returnArray
}

function mySize(collection){
    let newCollection = []
    let size = 0

    // if the collection is an object, creates value array
    if(!Array.isArray(collection)){
        newCollection = Object.values(collection)
    } else {newCollection = collection}

    newCollection.forEach(() => {
        size++
    })
    return size
}

function myFirst(array, n){
    if(n){
        let returnArray = array.slice(0, n)
        return returnArray
    } else{
        return array[0]
    }
}

function myLast(array, n){
    if(n){
        let returnArray = array.slice(array.length - n, array.length)
        return returnArray
    } else{
        return array[array.length -1 ]
    }
}

function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}