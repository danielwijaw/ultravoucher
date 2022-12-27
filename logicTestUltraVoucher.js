const arrayInput = [
    'cook',
    'save',
    'taste',
    'aves',
    'vase',
    'state',
    'map',
];

const compareStrings = (stringOne, stringTwo) => {
    stringOne = stringOne.toUpperCase().split('').sort().join('');
    stringTwo = stringTwo.toUpperCase().split('').sort().join('');
    
    if(stringOne == stringTwo){
        return [true, stringOne];
    }
    
    return [false, stringOne];
}

const anagramArray = (array) => {
    const returnObject = {}
    const returnValue = []
    for(let keyIn in array){
        const findMatch = compareStrings(array[keyIn], (array[keyIn - 1] || array[0]));
        if(returnObject[findMatch[1]]){
            returnObject[findMatch[1]].push(array[keyIn])
        }else{
            returnObject[findMatch[1]] = [array[keyIn]]
        }
    }
    
    for(let keyOb in returnObject){
        returnValue.push(returnObject[keyOb])
    }
    
    return returnValue
}

console.log(anagramArray(arrayInput))