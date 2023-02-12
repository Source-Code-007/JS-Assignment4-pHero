// Problem-1 A function that takes a positive number as input, multiplies it by 3, adds 10, divides by 2, and finally subtracts 5, and returns the result.
function mindGame(n) {
    if (typeof n == 'number' && n > 0) {
        return (((n * 3) + 10) / 2) - 5
    } else {
        return 'Please provide a positive number'
    }
}
// console.log(mindGame(5))

// Problem-2 A function that takes a string as input, if string character length is even number then return 'Even' otherwise return 'Odd'
function evenOdd(str) {
    if (typeof str == 'string' && str !== '') {
        if (str.length % 2 == 0) {
            return 'Even'
        } else {
            return 'Odd'
        }
    }
    return 'please provide a valid string'
}
// console.log(evenOdd('Progress'))


// Problem-3 A function that takes a number as input, then substract 7 from input value, if substraction is less then 7 then returns the difference, otherwise returns double the input number 
function isLGSeven(n) {
    let difference = n - 7
    if (typeof n == 'number') {
        if (difference < 7) {
            return difference
        } else {
            return n * 2
        }
    } else {
        return 'please provide a valid number'
    }
}
// console.log(isLGSeven(15))


// Problem-4 A function that takes a array of number as input and return the number of negative numbers (bad data) in the array.
function findingBadData(arr) {
    let badData = 0
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 0) {
                badData++
            } else {
                if (typeof arr[i] != 'number') {
                    return 'Please provide an array consisting of numbers.'
                }
            }
        }
        return badData
    }
    return 'Please provide an array consisting of numbers.'
}
// console.log(findingBadData([-1,-2,2,3,40,0,4.4, 'hey', 'batch7']))


// problem-5 Convert gems into diamond
function gemsToDiamond(fOneGems, fTwoGems, fThreeGems){
    let fOneDiamond = fOneGems*21 
    let fTwoDiamond = fTwoGems*32 
    let fThreeDiamond = fThreeGems*43 
    let sum = fOneDiamond + fTwoDiamond + fThreeDiamond
    if(typeof fOneGems== 'number' && typeof fTwoGems== 'number' && typeof fThreeGems == 'number'){
        if(sum>2000){
            return sum-2000
        } else{
            return sum
        }
    } else{
        return 'please provide valid number'
    }
}
// console.log(gemsToDiamond(1,1,1))